import { FC } from 'react';

import NavbarBrand from './navbar-brand';
import NavbarHamburger from './navbar-hamburger';
import NavbarMenu from './navbar-menu';
import NavbarProvider from './navbar-provider';

const Navbar: FC = () => {
	return (
		<NavbarProvider>
			<div className="sticky top-8 laptop:top-16 w-full flex flex-col items-center z-[100]">
				<div className="w-[calc(100vw-2rem)] rounded-xl px-6 laptop:w-[calc(100vw-6rem)] flex justify-between items-center h-18 bg-background/20 border border-border backdrop-blur-lg">
					<NavbarBrand />
					<NavbarHamburger />
				</div>
			</div>
			<NavbarMenu />
		</NavbarProvider>
	);
};

export default Navbar;
