'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { FC } from 'react';

import { Separator } from '../../../../components/ui/separator';
import { urlify } from '../../../../lib/utils';
import { Project, projects } from '../data';
import { useProjectPreviewData } from './project-preview-provider';

type ProjectItemProps = {
	project: Project;
	ordinal: number;
};

const ProjectItem: FC<ProjectItemProps> = ({ project, ordinal }) => {
	const { setFocusedProject } = useProjectPreviewData();
	const router = useTransitionRouter();

	return (
		<div
			onMouseEnter={() => setFocusedProject?.(project)}
			onMouseLeave={() => setFocusedProject?.(undefined)}
		>
			<a
				href={urlify(project.name)}
				onClick={e => {
					e.preventDefault();
					router.push(urlify(project.name));
				}}
				className="block font-semibold text-lg w-full line-clamp-1 overflow-ellipsis"
			>
				{project.name}
			</a>
			{ordinal !== projects.length - 1 && (
				<Separator className="my-3" />
			)}
		</div>
	);
};

export default ProjectItem;
