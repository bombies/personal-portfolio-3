'use client';

import type { FC } from 'react';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import {
	itemStaggerVariants,
	itemStaggerVariantsWithShowStagger,
} from '@/lib/animation-utils';

import { projects } from '../data';
import ProjectItem from './project-item';

const ProjectListing: FC = () => {
	const projectElements = useMemo(
		() =>
			projects.map((project, idx) => (
				<motion.span
					key={`project_item#${project.name}#${idx}`}
					variants={itemStaggerVariants}
				>
					<ProjectItem project={project} ordinal={idx} />
				</motion.span>
			)),
		[],
	);
	return (
		<motion.div
			variants={itemStaggerVariantsWithShowStagger}
			className="flex flex-col overflow-auto"
		>
			{projectElements}
		</motion.div>
	);
};

export default ProjectListing;
