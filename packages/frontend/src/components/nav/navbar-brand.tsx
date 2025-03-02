'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { FC } from 'react';

const NavbarBrand: FC = () => {
	const router = useTransitionRouter();
	return (
		// eslint-disable-next-line @next/next/no-html-link-for-pages
		<a
			href="/"
			onClick={e => {
				e.preventDefault();
				router.push('/');
			}}
		>
			<h1 className="font-bold text-xl">ajani</h1>
		</a>
	);
};

export default NavbarBrand;
