import { Variants } from 'motion/react';

export const containerStaggerVariants: Variants = {
	hiddden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
};

export const itemStaggerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -10,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

export const itemStaggerVariantsWithShowStagger: Variants = {
	hidden: {
		opacity: 0,
		y: -10,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.1,
			when: 'beforeChildren',
		},
	},
};

type BuildNestedStaggerVariantArgs = {
	staggerDelay?: number;
};

export const buildNestedStaggerVariant = (
	args?: BuildNestedStaggerVariantArgs,
): Variants => ({
	hidden: {
		opacity: 0,
		y: -10,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: args?.staggerDelay ?? 0.1,
			when: 'beforeChildren',
		},
	},
});
