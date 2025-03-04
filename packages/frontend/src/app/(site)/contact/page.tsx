'use client';

import {
	containerStaggerVariants,
	itemStaggerVariants,
	itemStaggerVariantsWithShowStagger,
} from '@/app/(site)/(landing)/page';
import MainContainer from '@/components/ui/main-container';
import { Separator } from '@/components/ui/separator';
import Title from '@/components/ui/title';
import { IconType, SiInspire } from '@icons-pack/react-simple-icons';
import { MailIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FC, useMemo } from 'react';

const contactOptions: ContactCardProps[] = [
	{
		icon: MailIcon,
		label: 'Email',
		value: 'ajani.green@outlook.com',
		href: 'mailto:ajani.green@outlook.com',
	},
	{
		icon: SiInspire,
		label: 'LinkedIn',
		value: 'Ajani Green',
		href: 'https://www.linkedin.com/in/ajani-green-83b469225/',
	},
];

const ContactPage: FC = () => {
	const MotionMainContainer = useMemo(() => motion.create(MainContainer), []);

	return (
		<MotionMainContainer
			variants={containerStaggerVariants}
			initial="hidden"
			animate="show"
			className="flex-col tablet:flex-row"
		>
			<motion.span variants={itemStaggerVariants}>
				<Title className="tablet:text-7xl">
					Contact <span className="text-primary">Me</span>
				</Title>
			</motion.span>

			<motion.span variants={itemStaggerVariants}>
				<Separator orientation="vertical" className="hidden tablet:block" />
				<Separator orientation="horizontal" className="tablet:hidden" />
			</motion.span>

			<motion.div
				variants={itemStaggerVariantsWithShowStagger}
				className="flex flex-col gap-y-6"
			>
				{contactOptions.map((option, idx) => (
					<motion.span
						key={`contact_option#${option.label}#${idx}`}
						variants={itemStaggerVariants}
					>
						<ContactCard {...option} />
					</motion.span>
				))}
			</motion.div>
		</MotionMainContainer>
	);
};

type ContactCardProps = {
	icon: IconType;
	label: string;
	value: string;
	href: string;
};

const ContactCard: FC<ContactCardProps> = ({ icon: Icon, label, href, value }) => {
	return (
		<Link target="_blank" rel="noopener noreferrer" href={href}>
			<div className="w-full tablet:w-96 overflow-hidden border rounded-lg border-border bg-primary/5 p-6 flex items-center gap-4">
				<Icon size={32} strokeWidth={1} className="text-primary shrink-0" />
				<div className="flex flex-col gap-1">
					<p className="text-primary font-semibold uppercase tracking-widest">
						{label}
					</p>
					<p className="text-lg line-clamp-1">{value}</p>
				</div>
			</div>
		</Link>
	);
};

export default ContactPage;
