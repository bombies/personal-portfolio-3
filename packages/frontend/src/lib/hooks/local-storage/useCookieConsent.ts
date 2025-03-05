'use client';

import { useLocalStorage } from '@/lib/hooks/local-storage/useLocalStorage';
import { useCallback, useEffect, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
type CookieConsent = {
	cookieTypes: {
		analytics: boolean;
	};
	acceptedAt?: number | null;
	updatedAt?: number;
};

const STORAGE_KEY = 'cookie-consent';

const defaultConsent: CookieConsent = {
	cookieTypes: {
		analytics: false,
	},
};

export const useCookieConsent = () => {
	const storage = useLocalStorage();
	const [consent, setConsent] = useState<CookieConsent>();

	useEffect(() => {
		if (!storage || !consent) return;

		storage.setItem(STORAGE_KEY, consent);
	}, [consent, storage]);

	const loadFromStorage = useCallback(() => {
		if (!storage) return;

		try {
			const stored = storage.getItem<CookieConsent>(STORAGE_KEY);
			if (!stored) {
				setConsent(defaultConsent);
				return;
			}

			// Basic validation
			if (!stored || typeof stored !== 'object') {
				setConsent(defaultConsent);
				return;
			}

			if (!stored.cookieTypes || typeof stored.cookieTypes !== 'object') {
				stored.cookieTypes = defaultConsent.cookieTypes;
			}

			// Ensure each cookie type is a boolean
			for (const key in defaultConsent.cookieTypes) {
				const typedKey = key as keyof CookieConsent['cookieTypes'];
				if (typeof stored.cookieTypes[typedKey] !== 'boolean') {
					stored.cookieTypes[typedKey] = defaultConsent.cookieTypes[typedKey];
				}
			}

			setConsent(stored);
		} catch {
			// If parsing fails or something unexpected happens, revert to default
			setConsent(defaultConsent);
		}
	}, [storage]);

	const getConsent = useCallback(
		(key: keyof CookieConsent['cookieTypes']) => {
			return consent?.acceptedAt === undefined ? false : consent.cookieTypes[key];
		},
		[consent],
	);

	const initConsentValues = useCallback(
		(consentValues: CookieConsent['cookieTypes']) => {
			setConsent({
				cookieTypes: consentValues,
				acceptedAt: Date.now(),
				updatedAt: Date.now(),
			});
		},
		[],
	);

	const consentAwaiting = useCallback(
		() => consent?.acceptedAt === undefined,
		[consent],
	);

	const consentGiven = useCallback(() => consent?.acceptedAt !== undefined, [consent]);

	const consentDenied = useCallback(() => consent?.acceptedAt === null, [consent]);

	const updateConsent = useCallback(
		(consentValues: Partial<CookieConsent['cookieTypes']>) => {
			setConsent(prev => {
				if (!prev) {
					return {
						cookieTypes: {
							...defaultConsent.cookieTypes,
							...consentValues,
						},
						acceptedAt: Date.now(),
						updatedAt: Date.now(),
					};
				}

				return {
					...prev,
					cookieTypes: {
						...prev.cookieTypes,
						...consentValues,
					},
					updatedAt: Date.now(),
				};
			});
		},
		[],
	);

	const resetConsent = useCallback(() => {
		setConsent(defaultConsent);
	}, []);

	const setState = useCallback((newState: CookieConsent) => {
		setConsent(newState);
	}, []);

	useEffect(() => {
		if (storage) {
			loadFromStorage();

			const storageEventHandler = (e: StorageEvent) => {
				if ((!e.key || e.key === STORAGE_KEY) && !e.newValue) {
					// The consent was removed so we must update the state accordingly
					resetConsent();
				} else if (e.key === STORAGE_KEY && e.oldValue && e.newValue) {
					// Ensure the new value is a JSON object, if not revert to the old value
					try {
						JSON.parse(e.newValue);
					} catch {
						setConsent(JSON.parse(e.oldValue));
					}
				}
			};

			addEventListener('storage', storageEventHandler);

			return () => {
				removeEventListener('storage', storageEventHandler);
			};
		}
	}, [loadFromStorage, resetConsent, storage]);

	return {
		cookieConsent: consent,
		getConsent,
		initConsentValues,
		consentAwaiting,
		consentGiven,
		consentDenied,
		updateConsent,
		resetConsent,
		setState,
	};
};
