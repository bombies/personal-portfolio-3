'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { ArrowUpRightIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';

import BadgeButton from '../badge-button';
import { useNavbarData } from './navbar-provider';

const navbarItems: { href: string; label: string }[] = [
	{ label: 'HOME', href: '/' },
	{ label: 'PROJECTS', href: '/' },
	{ label: 'ABOUT', href: '/' },
	{ label: 'CONTACT', href: '/' },
];

const NavbarMenu: FC = () => {
	const { opened } = useNavbarData();

	const items = useMemo(
		() =>
			navbarItems.map((item, ordinal) => (
				<NavbarMenuItem
					key={`navbaritem#${item.href}#${ordinal}`}
					{...item}
					ordinal={ordinal + 1}
				/>
			)),
		[],
	);

	return (
		<AnimatePresence>
			{opened && (
				<motion.div
					initial={{
						left: '-1000px',
					}}
					animate={{
						left: '0px',
					}}
					exit={{
						left: '-1000px',
					}}
					className="bg-background w-full h-[calc(100vh-5.5rem)] absolute top-12 z-10 flex flex-col gap-y-6 justify-center"
				>
					{items}
					<div className="flex gap-x-6">
						<BadgeButton
							href="/"
							target="_blank"
							referrerPolicy="no-referrer"
						>
							<ArrowUpRightIcon
								size={18}
							/>{' '}
							<p className="font-mono">
								resume
							</p>
						</BadgeButton>
						<BadgeButton
							href="/"
							target="_blank"
							referrerPolicy="no-referrer"
						>
							<SiGithub size={18} />{' '}
							<p className="font-mono">
								github
							</p>
						</BadgeButton>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

type NavbarMenuItemProps = {
	ordinal: number;
	href: string;
	label: string;
};

const NavbarMenuItem: FC<NavbarMenuItemProps> = ({ ordinal, href, label }) => {
	const router = useTransitionRouter();
	const { setOpened } = useNavbarData();
	const pathname = usePathname();
	return (
		<a
			href={href}
			onClick={e => {
				e.preventDefault();
				setOpened(false);

				if (href !== pathname) router.push(href);
			}}
		>
			<p className="font-bold text-5xl flex items-center gap-2">
				<span className="font-mono font-normal text-xs">
					#{ordinal}
				</span>
				<motion.span
                initial={{
						letterSpacing: '0.151em',

                }}
					whileHover={{
						letterSpacing: '0',
					}}
				>
					{label}
				</motion.span>
			</p>
		</a>
	);
};

export default NavbarMenu;
