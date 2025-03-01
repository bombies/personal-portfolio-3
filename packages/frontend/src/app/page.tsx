'use client';

import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

import BadgeButton from '../components/badge-button';
import { Badge } from '../components/ui/badge';

export default function Home() {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.1,
			}}
			className="w-full h-[calc(100vh-5.5rem)] flex flex-col justify-center items-center gap-y-6"
		>
			<Badge className="font-mono text-lg" variant="outline">
				Full-Stack Developer
			</Badge>
			<h1 className="text-6xl font-bold">
				Ajani{' '}
				<span className="text-primary">Green</span>
			</h1>
			<p className="text-center text-foreground-secondary">
				Island Roots 🇯🇲, Cloud Heights – Full-Stack
				Brilliance Reimagined.
			</p>
			<div className="flex gap-x-4">
				<BadgeButton href="/" smoothTransition>
					<ArrowRightIcon
						size={18}
						className="mr-1"
					/>
					my projects
				</BadgeButton>
				<BadgeButton href="/" smoothTransition>
					<ArrowRightIcon
						size={18}
						className="mr-1"
					/>
					more about me
				</BadgeButton>
			</div>
		</motion.div>
	);
}
