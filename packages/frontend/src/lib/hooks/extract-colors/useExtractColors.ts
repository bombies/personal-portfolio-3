/**
 * Taken from https://github.com/JesusAguilarAliaga/react-extract-colors/blob/main/src/hooks/useExtractColors.ts
 */
'use client';

import { useEffect, useMemo, useState } from 'react';

import { defaultColour, defaultExtractColorOptions, extractDominantColors, formatColors } from './helpers';

/**
 * Taken from https://github.com/JesusAguilarAliaga/react-extract-colors/blob/main/src/hooks/useExtractColors.ts
 */

type SortBy = 'vibrance' | 'dominance';
type Format = 'hex' | 'rgb' | 'hsl' | 'hsv' | 'rgba';

interface UseExtractColorReturn {
	dominantColor: string | null;
	darkerColor: string | null;
	lighterColor: string | null;
	loading: boolean;
	error: Error | null;
	colors: string[];
}

export interface ExtractColorOptions {
	maxColors: number;
	format: Format;
	maxSize: number;
	colorSimilarityThreshold: number;
	sortBy: SortBy;
}

export const useExtractColors = (
	imageUrl?: string,
	customOptions: Partial<ExtractColorOptions> = {},
): UseExtractColorReturn => {
	const options: ExtractColorOptions = useMemo(
		() => ({ ...defaultExtractColorOptions, ...customOptions }),
		[customOptions],
	);

	const [colors, setColors] = useState<string[]>([]);
	const [dominantColor, setDominantColor] = useState<string | null>(
		defaultColour,
	);
	const [darkerColor, setDarkerColor] = useState<string | null>(
		defaultColour,
	);
	const [lighterColor, setLighterColor] = useState<string | null>(
		defaultColour,
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		let isMounted = true;

		if (!imageUrl) {
			setLoading(false);
			return;
		}

		(async () => {
			try {
				if (isMounted) {
					const colors =
						await extractDominantColors(
							imageUrl,
							options,
						);
					const formattedColors = formatColors(
						colors,
						options,
					);

					setDominantColor(
						formattedColors.dominantColor,
					);
					setDarkerColor(
						formattedColors.darkerColor,
					);
					setLighterColor(
						formattedColors.lighterColor,
					);
					setColors(formattedColors.colors);
				}
			} catch (error) {
				if (isMounted) {
					setError(error as Error);
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [imageUrl, options]);

	return {
		dominantColor,
		darkerColor,
		lighterColor,
		loading,
		error,
		colors,
	};
};
