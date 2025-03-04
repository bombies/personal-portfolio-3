'use client';

import {
	buildNestedStaggerVariant,
	containerStaggerVariants,
	itemStaggerVariants,
	itemStaggerVariantsWithShowStagger,
} from '@/app/(site)/(landing)/page';
import { Technology, technologyAttributes } from '@/app/(site)/projects/types';
import { Badge } from '@/components/ui/badge';
import BreadcrumbBuilder from '@/components/ui/breadcrumb-builder';
import Image from '@/components/ui/image';
import MainContainer from '@/components/ui/main-container';
import { Separator } from '@/components/ui/separator';
import Title from '@/components/ui/title';
import { motion } from 'motion/react';
import { FC, useMemo } from 'react';

const AboutMePage: FC = () => {
	const MotionTitle = useMemo(() => motion.create(Title), []);
	const MotionSeparator = useMemo(() => motion.create(Separator), []);
	const MotionBadge = useMemo(() => motion.create(Badge), []);

	return (
		<MainContainer className="flex-col pt-12 laptop:h-[calc(100vh-5.5rem)] tablet:pt-24 laptop:pt-24">
			<BreadcrumbBuilder
				breadcrumbs={[
					{
						label: 'Home',
						href: '/',
					},
					{
						label: 'About Me',
						href: '/about',
					},
				]}
			/>
			<motion.div
				variants={containerStaggerVariants}
				initial="hidden"
				animate="show"
				className="flex flex-col-reverse tablet:flex-row tablet:justify-between gap-6"
			>
				<motion.div
					variants={itemStaggerVariantsWithShowStagger}
					className="space-y-6"
				>
					<MotionTitle variants={itemStaggerVariants}>
						About <span className="text-primary">Me</span>
					</MotionTitle>
					<MotionSeparator variants={itemStaggerVariants} />
					<motion.p variants={itemStaggerVariants}>
						I&apos;m Ajani Green—a passionate React developer with 5 years of
						programming experience from Jamaica 🇯🇲, and a strong advocate for
						innovative cloud infrastructure. My expertise lies in building
						dynamic user interfaces with React, complemented by hands-on
						experience in architecting, deploying, and maintaining cloud-based
						applications on AWS. Whether it&apos;s crafting seamless front-end
						experiences or designing robust backend systems, I&apos;m
						dedicated to continuous learning and pushing the boundaries of
						what&apos;s possible in web development and cloud computing.
					</motion.p>

					{/* Give a list of all technologies */}
					<motion.h3
						variants={itemStaggerVariants}
						className="font-bold text-xl text-primary"
					>
						Languages, Frameworks & Tools
					</motion.h3>
					<motion.div
						variants={buildNestedStaggerVariant({ staggerDelay: 0.05 })}
						className="flex gap-2 flex-wrap"
					>
						{Object.values(Technology).map((tech, index) => {
							if (typeof tech === 'string') return undefined;

							const attribs = technologyAttributes[tech];
							return (
								<MotionBadge
									variants={itemStaggerVariants}
									whileHover={{
										scale: 1.15,
									}}
									key={`tech-${index}`}
									variant="outline"
									className="text-sm gap-3 font-mono"
								>
									<attribs.icon className="!size-[18px]" /> {attribs.label}
								</MotionBadge>
							);
						})}
					</motion.div>
				</motion.div>

				<Image
					animation={{
						variants: itemStaggerVariants,
					}}
					src="/me.jpeg"
					alt="Me :)"
					classNames={{
						global: 'rounded-lg shrink-0 w-full place-self-center tablet:size-96 aspect-9/10 border border-border',
					}}
					fill
					objectFit="cover"
				/>
			</motion.div>
		</MainContainer>
	);
};

export default AboutMePage;
