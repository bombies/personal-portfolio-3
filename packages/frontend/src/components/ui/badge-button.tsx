'use client';

import { MotionProps, motion } from 'motion/react';
import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	useMemo,
} from 'react';

import { slideRight } from '../../lib/page-transitions';
import { cn } from '../../lib/utils';

type Props =
	| ({
			href?: never;
			smoothTransition?: never;
			newTab?: never;
	  } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)
	| ({
			href: string;
			smoothTransition?: boolean;
			newTab?: boolean;
	  } & Omit<
			LinkProps &
				DetailedHTMLProps<
					AnchorHTMLAttributes<HTMLAnchorElement>,
					HTMLAnchorElement
				>,
			'href'
	  >);

export const badgeClass =
	'border border-border bg-background px-4 py-1 rounded-full font-mono';

const btnAnimation: MotionProps = {
	whileHover: {
		scale: 1.025,
	},
};

const MotionLink = motion.create(Link);

const BadgeButton: FC<Props> = ({
	className,
	children,
	href,
	smoothTransition,
	newTab,
	...props
}) => {
	const router = useTransitionRouter();

	const btnClass = useMemo(
		() => cn(badgeClass, 'flex items-center gap-2 min-w-12', className),
		[className],
	);

	return href ? (
		smoothTransition ? (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<motion.a
				{...props}
				{...btnAnimation}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
				href={href}
				className={btnClass}
				onClick={e => {
					e.preventDefault();
					router.push(href, {
						onTransitionReady: slideRight,
					});
				}}
			>
				{children}
			</motion.a>
		) : (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<MotionLink
				{...props}
				{...btnAnimation}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
				href={href}
				className={btnClass}
			>
				{children}
			</MotionLink>
		)
	) : (
		// @ts-expect-error Typescript can't tell that the attributes will be for a button
		<motion.button {...props} {...btnAnimation} className={btnClass}>
			{children}
		</motion.button>
	);
};

export default BadgeButton;
