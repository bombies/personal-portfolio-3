'use client';

const animationOptions: number | KeyframeAnimationOptions = {
	duration: 1000,
	easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
	fill: 'forwards',
};

export const slideRight = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translateX(0%)',
			},
			{
				opacity: 0.2,
				transform: 'translateX(135%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-old(root)',
		},
	);

	document.documentElement.animate(
		[
			{
				clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
			},
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-new(root)',
		},
	);
};

export const slideLeft = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translateX(0%)',
			},
			{
				opacity: 0.2,
				transform: 'translateX(-35%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-old(root)',
		},
	);

	document.documentElement.animate(
		[
			{
				// Start with the element hidden from the right
				clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
			},
			{
				// Reveal the full element
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-new(root)',
		},
	);
};

export const slideUp = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translateY(0%)',
			},
			{
				opacity: 0.2,
				transform: 'translateY(-135%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-old(root)',
		},
	);

	document.documentElement.animate(
		[
			{
				// Start with the element hidden at the bottom
				clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
			},
			{
				// Reveal the full element
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-new(root)',
		},
	);
};

export const slideDown = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translateY(0%)',
			},
			{
				opacity: 0.2,
				transform: 'translateY(135%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-old(root)',
		},
	);

	document.documentElement.animate(
		[
			{
				// Start with the element hidden at the top
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
			},
			{
				// Reveal the full element
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			},
		],
		{
			...animationOptions,
			pseudoElement: '::view-transition-new(root)',
		},
	);
};
