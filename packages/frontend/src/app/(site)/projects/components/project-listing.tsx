'use client';

import {
	itemStaggerVariants,
	itemStaggerVariantsWithShowStagger,
} from '@/lib/animation-utils';
import { motion } from 'motion/react';
import { FC, useMemo } from 'react';

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
