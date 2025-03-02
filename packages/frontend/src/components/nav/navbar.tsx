import { FC } from 'react';

import NavbarBrand from './navbar-brand';
import NavbarHamburger from './navbar-hamburger';
import NavbarMenu from './navbar-menu';
import NavbarProvider from './navbar-provider';

const Navbar: FC = () => {
	return (
		<NavbarProvider>
			<nav className="w-full flex justify-between items-center h-12 px-8 laptop:px-24 mt-6 laptop:mt-32 relative">
				<NavbarBrand />
				<div>
					<NavbarHamburger />
				</div>
				<NavbarMenu />
			</nav>
		</NavbarProvider>
	);
};

export default Navbar;
