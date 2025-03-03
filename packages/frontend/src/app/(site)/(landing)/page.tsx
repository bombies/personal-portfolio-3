'use client';

import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';

import { Badge } from '../../../components/ui/badge';
import BadgeButton from '../../../components/ui/badge-button';
import MainContainer from '../../../components/ui/main-container';

const containerVariants = {
	hiddden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: -10,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

export default function Home() {
	const MotionBadge = useMemo(() => motion.create(Badge), []);

	return (
		<MainContainer className="flex-col !max-w-full">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				className="flex flex-col items-center justify-center gap-y-6"
			>
				<MotionBadge className="font-mono text-lg gap-x-2" variant="outline" variants={itemVariants}>
					<span className="text-accent">Full-Stack</span>
					Developer
				</MotionBadge>
				<motion.h1 className="text-6xl laptop:text-9xl font-bold text-center" variants={itemVariants}>
					Ajani <span className="text-primary">Green</span>
				</motion.h1>
				<motion.p className="text-center laptop:text-xl text-foreground-secondary" variants={itemVariants}>
					Island Roots 🇯🇲, Cloud Heights – Full-Stack Brilliance Reimagined.
				</motion.p>
				<motion.div className="flex flex-col gap-4 phone-big:flex-row" variants={itemVariants}>
					<BadgeButton href="/projects" className='justify-start w-fit' smoothTransition>
						<ArrowRightIcon size={18} className="mr-1" />
						my projects
					</BadgeButton>
					<BadgeButton href="/about" smoothTransition>
						<ArrowRightIcon size={18} className="mr-1" />
						more about me
					</BadgeButton>
				</motion.div>
			</motion.div>
		</MainContainer>
	);
}
