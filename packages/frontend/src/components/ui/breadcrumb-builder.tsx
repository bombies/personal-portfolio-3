'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { FC, Fragment, useMemo } from 'react';

import { slideLeft } from '../../lib/page-transitions';
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './breadcrumb';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu';

type BreadcrumbData = { href: string; label: string };

type Props = {
	breadcrumbs: BreadcrumbData[];
	maxVisibleCrumbs?: number;
};

const BreadcrumbBuilder: FC<Props> = ({
	breadcrumbs,
	maxVisibleCrumbs = 3,
}) => {
	const { visibleCrumbs, hiddenCrumbs } = useMemo(() => {
		if (breadcrumbs.length <= maxVisibleCrumbs)
			return { visibleCrumbs: breadcrumbs, hiddenCrumbs: [] };

		const visibleCrumbs: BreadcrumbData[] = [breadcrumbs[0]];

		// Get the last maxVisibleCrumbs - 1 crumbs
		for (
			let i = breadcrumbs.length - maxVisibleCrumbs + 1;
			i < breadcrumbs.length;
			i++
		)
			visibleCrumbs.push(breadcrumbs[i]);

		const hiddenCrumbs: BreadcrumbData[] = breadcrumbs.filter(
			crumb => !visibleCrumbs.includes(crumb),
		);

		return { visibleCrumbs, hiddenCrumbs };
	}, [breadcrumbs, maxVisibleCrumbs]);

	// Breadcrumbs but the first and last one
	const visibleCrumbsButFirstandLast = useMemo(
		() =>
			visibleCrumbs
				.slice(1, visibleCrumbs.length - 1)
				.map((crumb, idx) => (
					<Fragment
						key={`breadcrumb#${crumb.href}#${idx}`}
					>
						<BreadcrumbItem>
							<BreadcrumbTransitionLink
								href={
									crumb.href
								}
								label={
									crumb.label
								}
								transition={
									slideLeft
								}
							/>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
					</Fragment>
				)),
		[visibleCrumbs],
	);

	return (
		breadcrumbs.length && (
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbTransitionLink
							href={
								visibleCrumbs[0]
									.href
							}
							label={
								visibleCrumbs[0]
									.label
							}
							transition={slideLeft}
						/>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					{/* Hidden crumbs */}
					{hiddenCrumbs.length ? (
						<BreadcrumbItem>
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-1">
									<BreadcrumbEllipsis className="h-4 w-4" />
									<span className="sr-only">
										Toggle
										menu
									</span>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									{hiddenCrumbs.map(
										(
											crumb,
											idx,
										) => (
											<DropdownMenuItem
												key={`breadcrumb#${crumb.href}#${idx}`}
												asChild
											>
												<BreadcrumbItem>
													<BreadcrumbTransitionLink
														href={
															crumb.href
														}
														label={
															crumb.label
														}
														transition={
															slideLeft
														}
													/>
												</BreadcrumbItem>
											</DropdownMenuItem>
										),
									)}
								</DropdownMenuContent>
							</DropdownMenu>
						</BreadcrumbItem>
					) : undefined}

					{/* Last 2 crumbs */}
					{visibleCrumbsButFirstandLast}
					<BreadcrumbItem>
						<BreadcrumbPage>
							{
								visibleCrumbs[
									visibleCrumbs.length -
										1
								].label
							}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		)
	);
};

type BreadcrumbTransitionLinkProps = {
	href: string;
	label: string;
	transition: () => void;
};

const BreadcrumbTransitionLink: FC<BreadcrumbTransitionLinkProps> = ({
	href,
	label,
	transition,
}) => {
	const router = useTransitionRouter();
	const pathName = usePathname();

	return (
		<BreadcrumbLink
			href={href}
			onClick={e => {
				e.preventDefault();

				if (pathName === href) return;
				router.push(href, {
					onTransitionReady: transition,
				});
			}}
		>
			{label}
		</BreadcrumbLink>
	);
};

export default BreadcrumbBuilder;
