import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function urlify(s: string): string {
	return (
		'/' +
		encodeURI(
			s
				.toLowerCase()
				.replace(/[^\w\s]/g, '')
				.replace(/\s{2,}/g, ' ')
				.replace(/\s/g, '-'),
		)
	);
}

export function dupeArr<T>(arr: T[], times: number): T[] {
	return Array.from({ length: times }, () => arr).flat();
}
