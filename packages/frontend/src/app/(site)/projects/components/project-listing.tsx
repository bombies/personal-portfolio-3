'use client';

import { FC, useMemo } from 'react';

import { projects } from '../data';
import ProjectItem from './project-item';

const ProjectListing: FC = () => {
	const projectElements = useMemo(
		() =>
			projects.map((project, idx) => (
				<ProjectItem
					key={`project_item#${project.name}#${idx}`}
					project={project}
					ordinal={idx}
				/>
			)),
		[],
	);
	return (
		<div className="flex flex-col overflow-auto">
			{projectElements}
		</div>
	);
};

export default ProjectListing;
