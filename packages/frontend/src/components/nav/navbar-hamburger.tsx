'use client';

import { MotionConfig, motion } from 'motion/react';
import { FC } from 'react';

import { useNavbarData } from './navbar-provider';

type HamburgerProps = {
	onOpenChange?: (opened: boolean) => void;
};

const NavbarHamburger: FC<HamburgerProps> = ({ onOpenChange }) => {
	const { opened, setOpened } = useNavbarData();

	return (
		<MotionConfig
			transition={{
				duration: 0.2,
				ease: 'easeInOut',
			}}
		>
			<motion.button
				initial={false}
				className="size-12 border border-border rounded-sm p- relative"
				onClick={() =>
					setOpened(prev => {
						const newVal = !prev;
						onOpenChange?.(newVal);
						return newVal;
					})
				}
				animate={opened ? 'open' : 'closed'}
			>
				<motion.span
					variants={variants.top}
					className="absolute h-[1px] w-8 bg-white"
					style={{
						y: '-50%',
						left: '50%',
						x: '-50%',
						top: '35%',
					}}
				/>
				<motion.span
					variants={variants.middle}
					className="absolute h-[1px] w-8 bg-white"
					style={{
						left: '50%',
						x: '-50%',
						top: '50%',
						y: '-50%',
					}}
				/>
				<motion.span
					variants={variants.bottom}
					className="absolute h-[1px] w-8 bg-white"
					style={{
						x: '-50%',
						y: '-50%',
						bottom: '35%',
						left: '50%',
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
};

const variants = {
	top: {
		open: {
			rotate: ['0deg', '0deg', '45deg'],
			top: ['35%', '50%', '50%'],
		},
		closed: {
			rotate: ['45deg', '0deg', '0deg'],
			top: ['50%', '50%', '35%'],
		},
	},
	middle: {
		open: {
			rotate: ['0deg', '0deg', '-45deg'],
		},
		closed: {
			rotate: ['-45deg', '0deg', '0deg'],
		},
	},
	bottom: {
		open: {
			rotate: ['0deg', '0deg', '45deg'],
			bottom: ['35%', '50%', '50%'],
			opacity: [1, 1, 0],
			left: '50%',
		},
		closed: {
			rotate: ['45deg', '0deg', '0deg'],
			bottom: ['50%', '50%', '35%'],
			opacity: [0, 1, 1],
			left: '50%',
		},
	},
};

export default NavbarHamburger;
