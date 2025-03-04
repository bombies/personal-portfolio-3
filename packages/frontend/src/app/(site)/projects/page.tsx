'use client';

import { containerStaggerVariants, itemStaggerVariants } from '@/app/(site)/(landing)/page';
import { motion } from 'motion/react';
import { FC, useMemo } from 'react';

import BreadcrumbBuilder from '../../../components/ui/breadcrumb-builder';
import MainContainer from '../../../components/ui/main-container';
import { Separator } from '../../../components/ui/separator';
import Title from '../../../components/ui/title';
import ProjectImagePreview from './components/project-image-preview';
import ProjectListing from './components/project-listing';
import ProjectPreviewProvider from './components/project-preview-provider';
import { projects } from './data';

const ProjectsPage: FC = () => {
	const MotionBreadcrumbBuilder = useMemo(() => motion.create(BreadcrumbBuilder), []);
	
	return (
		<ProjectPreviewProvider>
			<MainContainer className="laptop:max-w-[75rem]">
				<motion.div
					variants={containerStaggerVariants}
					initial="hidden"
					animate="show"
					className="flex flex-col w-full laptop:w-1/2 gap-y-6"
				>
					<MotionBreadcrumbBuilder
						variants={itemStaggerVariants}
						breadcrumbs={[
							{
								label: 'Home',
								href: '/',
							},
							{
								label: 'Projects',
								href: '/projects',
							},
						]}
					/>
					<motion.div variants={itemStaggerVariants} className="flex justify-between items-center shrink-0">
						<Title>
							My <span className="text-primary">Projects</span>
						</Title>
						<div className="bg-primary/10 border border-border rounded-full size-10 flex justify-center items-center">
							<span className="font-mono font-bold">{projects.length}</span>
						</div>
					</motion.div>
					<Separator />
					<ProjectListing />
				</motion.div>
				<ProjectImagePreview />
			</MainContainer>
		</ProjectPreviewProvider>
	);
};

export default ProjectsPage;
