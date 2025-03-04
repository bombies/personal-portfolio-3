'use client';

import {
	ClientLocalStorage,
	useLocalStorage,
} from '@/lib/hooks/local-storage/useLocalStorage';
import { useEffect, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
class ClientLocalCache {
	private static instance: ClientLocalCache;
	private cache: Record<string, { data: any; expiresAt?: number }> = {};

	private constructor(private readonly localStorage: ClientLocalStorage) {
		this.loadFromStorage();
		this.cleanExpiredCache();
	}

	setCache(cache: Record<string, { data: any; expiresAt?: number }>) {
		this.cache = cache;
		this.updateStorage();
	}

	cacheItem(
		key: string,
		value: any,
		args?: {
			/**
			 * Time in milliseconds for the cache to expire
			 */
			expiresIn?: number;
		},
	) {
		const expiresAt = args?.expiresIn ? Date.now() + args.expiresIn : undefined;
		this.cache[key] = {
			data: value,
			expiresAt,
		};
		this.updateStorage();
	}

	getCachedItem<T = any>(key: string) {
		const cached = this.cache[key];
		if (!cached) return null;

		if (cached.expiresAt && cached.expiresAt < Date.now()) {
			this.removeCachedItem(key);
			return null;
		}

		return cached.data as T;
	}

	removeCachedItem(key: string) {
		delete this.cache[key];
		this.updateStorage();
	}

	clearCache() {
		this.cache = {};
		this.updateStorage();
	}

	static getInstance(localStorage: ClientLocalStorage) {
		if (!this.instance) this.instance = new ClientLocalCache(localStorage);
		return this.instance;
	}

	private updateStorage() {
		this.localStorage.setItem('localCache', this.cache);
	}

	private loadFromStorage() {
		const storedCache =
			this.localStorage.getItem<Record<string, { data: any; expiresAt?: number }>>(
				'localCache',
			);

		// If any of these keys in the cache don't have either a data key, remove them
		let cacheChanged = false;
		if (storedCache) {
			for (const key in storedCache) {
				const item = storedCache[key];
				if (!item.data) {
					delete storedCache[key];
					cacheChanged = true;
				}
			}
		}

		this.cache = storedCache ?? {};
		if (cacheChanged) this.updateStorage();
	}

	private cleanExpiredCache() {
		for (const key in this.cache) {
			const item = this.cache[key];
			if (item.expiresAt && item.expiresAt < Date.now()) {
				this.removeCachedItem(key);
			}
		}
	}
}

export const useLocalCache = () => {
	const storage = useLocalStorage();
	const [cache, setCache] = useState<ClientLocalCache>();

	useEffect(() => {
		if (storage) {
			setCache(ClientLocalCache.getInstance(storage));

			const storageEventHandler = (e: StorageEvent) => {
				const cacheInstance = ClientLocalCache.getInstance(storage);
				if ((!e.key || e.key === 'localCache') && !e.newValue) {
					// The cache was removed so we must update the state accordingly
					cacheInstance.clearCache();
				} else if (e.key === 'localCache' && e.oldValue && e.newValue) {
					// Ensure the new value is a JSON object, if not revert to the old value
					try {
						JSON.parse(e.newValue);
					} catch {
						cacheInstance.setCache(JSON.parse(e.oldValue));
					}
				}
			};

			addEventListener('storage', storageEventHandler);

			return () => {
				removeEventListener('storage', storageEventHandler);
			};
		}
	}, [storage]);

	return cache;
};
