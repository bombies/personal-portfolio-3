'use client';

import type { FC } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import { slideLeft } from '../../lib/page-transitions';

const NavbarBrand: FC = () => {
	const router = useTransitionRouter();
	const pathName = usePathname();
	return (
		<a
			href="/"
			onClick={(e) => {
				e.preventDefault();

				if (pathName === '/') return;

				router.push('/', {
					onTransitionReady: slideLeft,
				});
			}}
		>
			<h1 className="font-bold text-xl">ajani</h1>
		</a>
	);
};

export default NavbarBrand;
