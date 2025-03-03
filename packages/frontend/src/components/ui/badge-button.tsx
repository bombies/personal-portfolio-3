'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, FC, useMemo } from 'react';

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
	  } & Omit<LinkProps & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'>);

export const badgeClass = 'border border-border bg-background px-4 py-1 rounded-full font-mono';

const BadgeButton: FC<Props> = ({ className, children, href, smoothTransition, newTab, ...props }) => {
	const router = useTransitionRouter();

	const btnClass = useMemo(
		() => cn(badgeClass, 'flex items-center gap-2 min-w-12', className),
		[className],
	);

	return href ? (
		smoothTransition ? (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<a
				{...props}
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
			</a>
		) : (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<Link
				{...props}
				target={newTab ? '_blank' : undefined}
				rel={newTab ? 'noopener noreferrer' : undefined}
				href={href}
				className={btnClass}
			>
				{children}
			</Link>
		)
	) : (
		// @ts-expect-error Typescript can't tell that the attributes will be for a button
		<button {...props} className={btnClass}>
			{children}
		</button>
	);
};

export default BadgeButton;
