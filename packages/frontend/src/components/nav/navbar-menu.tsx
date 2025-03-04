'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { ArrowUpRightIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';

import { slideUp } from '../../lib/page-transitions';
import BadgeButton from '../ui/badge-button';
import { useNavbarData } from './navbar-provider';

const navbarItems: { href: string; label: string }[] = [
	{ label: 'HOME', href: '/' },
	{ label: 'PROJECTS', href: '/projects' },
	{ label: 'ABOUT', href: '/about' },
	{ label: 'CONTACT', href: '/contact' },
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
				<motion.nav
					transition={{
						duration: 0.75,
						type: 'spring',
					}}
					initial={{
						opacity: 0,
						left: '-1000px',
					}}
					animate={{
						opacity: 1,
						left: '0px',
					}}
					exit={{
						opacity: 0,
						left: '-1000px',
					}}
					className="bg-background/80 backdrop-blur-lg w-full h-screen fixed top-0 z-[99] translate-z-0 isolate px-8 laptop:px-24 flex flex-col gap-y-6 justify-center"
				>
					{items}
					<div className="flex gap-x-6">
						<BadgeButton href="/AjaniGreenResume.pdf" newTab>
							<ArrowUpRightIcon size={18} />{' '}
							<p className="font-mono">resume</p>
						</BadgeButton>
						<BadgeButton href="https://github.com/bombies" newTab>
							<SiGithub size={18} /> <p className="font-mono">github</p>
						</BadgeButton>
					</div>
				</motion.nav>
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

				if (href !== pathname)
					router.push(href, {
						onTransitionReady: slideUp,
					});
			}}
		>
			<p className="font-bold text-5xl flex items-center gap-2">
				<span className="font-mono font-normal text-xs">#{ordinal}</span>
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
