'use client';

import { Project } from '@/app/(site)/projects/types';
import { defaultColour } from '@/lib/hooks/extract-colors/helpers';
import { useExtractColors } from '@/lib/hooks/extract-colors/useExtractColors';
import { AnimatePresence, motion } from 'motion/react';
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
	const { focusedProject, setFocusedProject } = useProjectPreviewData();
	const router = useTransitionRouter();
	const { dominantColor } = useExtractColors(project.coverImage, {
		format: 'hex',
	});
	return (
		<motion.div
			layout
			onMouseEnter={() => setFocusedProject?.(project)}
			onMouseLeave={() => setFocusedProject?.(undefined)}
		>
			<AnimatePresence>
				<a
					href={`/projects${urlify(project.name)}`}
					onClick={e => {
						e.preventDefault();
						router.push(`/projects${urlify(project.name)}`, {
							onTransitionReady: slideRight,
						});
					}}
					className="inline-flex gap-2 items-center font-semibold text-lg w-full line-clamp-1 overflow-ellipsis"
				>
					{focusedProject === project && (
						<motion.span
							initial={{ height: 0 }}
							animate={{ height: '1.5rem' }}
							exit={{ height: 0 }}
							style={{ backgroundColor: dominantColor ?? defaultColour }}
							className="w-[2px]"
						></motion.span>
					)}
					{project.name}
				</a>
			</AnimatePresence>
			{ordinal !== projects.length - 1 && <Separator className="my-3" />}
		</motion.div>
	);
};

export default ProjectItem;
