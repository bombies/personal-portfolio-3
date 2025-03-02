'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link, { LinkProps } from 'next/link';
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	useMemo,
} from 'react';

import { cn } from '../../lib/utils';

type Props =
	| ({ href?: never; smoothTransition?: never } & DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
	  >)
	| ({ href: string; smoothTransition?: boolean } & Omit<
			LinkProps &
				DetailedHTMLProps<
					AnchorHTMLAttributes<HTMLAnchorElement>,
					HTMLAnchorElement
				>,
			'href'
	  >);

export const badgeClass =
	'border border-border bg-black/10 backdrop-blur-md px-4 py-1 rounded-full';

const BadgeButton: FC<Props> = ({
	className,
	children,
	href,
	smoothTransition,
	...props
}) => {
	const router = useTransitionRouter();

	const btnClass = useMemo(
		() =>
			cn(
				badgeClass,
				'flex justify-between items-center gap-2 min-w-12',
				className,
			),
		[className],
	);

	return href ? (
		smoothTransition ? (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<a
				{...props}
				href={href}
				className={btnClass}
				onClick={e => {
					e.preventDefault();
					router.push(href);
				}}
			>
				{children}
			</a>
		) : (
			// @ts-expect-error Typescript can't tell that the attributes will be for an anchor
			<Link {...props} href={href} className={btnClass}>
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
