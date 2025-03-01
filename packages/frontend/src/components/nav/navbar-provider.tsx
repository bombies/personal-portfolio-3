'use client';

import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';

type NavbarData = {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
};

const NavbarContext = createContext<NavbarData | undefined>(undefined);

export const useNavbarData = () => {
	const data = useContext(NavbarContext);
	if (!data)
		throw new Error(
			'useNavbarData must be used within a NavbarProvider!',
		);
	return data;
};

const NavbarProvider: FC<PropsWithChildren> = ({ children }) => {
	const [opened, setOpened] = useState(false);

	const data = useMemo<NavbarData>(
		() => ({
			opened,
			setOpened,
		}),
		[opened],
	);

	return (
		<NavbarContext.Provider value={data}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarProvider;
