'use client';

import { Project } from '@/app/(site)/projects/types';
import { useTransitionRouter } from 'next-view-transitions';
import { FC } from 'react';

import { Separator } from '../../../../components/ui/separator';
import { slideRight } from '../../../../lib/page-transitions';
import { urlify } from '../../../../lib/utils';
import { projects } from '../data';
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
				href={`/projects${urlify(project.name)}`}
				onClick={e => {
					e.preventDefault();
					router.push(
						`/projects${urlify(project.name)}`,
						{
							onTransitionReady:
								slideRight,
						},
					);
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
