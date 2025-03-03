'use client';

import { itemStaggerVariants, itemStaggerVariantsWithShowStagger } from '@/app/(site)/(landing)/page';
import { motion } from 'motion/react';
import { FC, useMemo } from 'react';

import { projects } from '../data';
import ProjectItem from './project-item';

const ProjectListing: FC = () => {
	const MotionProjectItem = useMemo(() => motion.create(ProjectItem), []);

	const projectElements = useMemo(
		() =>
			projects.map((project, idx) => (
				<MotionProjectItem
					variants={itemStaggerVariants}
					key={`project_item#${project.name}#${idx}`}
					project={project}
					ordinal={idx}
				/>
			)),
		[MotionProjectItem],
	);
	return (
		<motion.div variants={itemStaggerVariantsWithShowStagger} className="flex flex-col overflow-auto">
			{projectElements}
		</motion.div>
	);
};

export default ProjectListing;
