import { FC } from 'react';

import NavbarHamburger from './navbar-hamburger';
import NavbarMenu from './navbar-menu';
import NavbarProvider from './navbar-provider';

const Navbar: FC = () => {
	return (
		<NavbarProvider>
			<nav className="w-full flex justify-between items-center h-12 mt-6 relative">
				<div>
					<h1 className="font-bold text-xl">
						ajani
					</h1>
				</div>
				<div>
					<NavbarHamburger />
				</div>
				<NavbarMenu />
			</nav>
		</NavbarProvider>
	);
};

export default Navbar;
