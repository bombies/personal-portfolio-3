'use client';

import { AnimatePresence, motion } from 'motion/react';
import { FC, useMemo } from 'react';

import Image from '../../../../components/ui/image';
import { useProjectPreviewData } from './project-preview-provider';

const ProjectImagePreview: FC = () => {
	const { focusedProject } = useProjectPreviewData();
	const image = useMemo(
		() => focusedProject?.images?.[0],
		[focusedProject?.images],
	);

	return (
		<AnimatePresence>
			{focusedProject ? (
				image ? (
					<Image
						animation={{
							viewport: {
								once: false,
							},
							initial: {
								opacity: 0,
							},
							animate: {
								opacity: 1,
							},
							exit: {
								opacity: 0,
							},
						}}
						src={image}
						alt="Project Preview"
						fill
						classNames={{
							container: 'hidden laptop:flex laptop:w-1/2 h-full rounded-md border border-border',
						}}
						objectFit="cover"
					/>
				) : (
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{ opacity: 0 }}
						className="hidden laptop:flex laptop:w-1/2 h-full rounded-md border border-border bg-accent/10 justify-center flex-col items-center gap-2 p-16 overflow-hidden"
					>
						<p className="text-5xl font-bold text-center line-clamp-2 overflow-ellipsis">
							{focusedProject.name}
						</p>
						<p className="text-center text-foreground-secondary line-clamp-3 overflow-ellipsis">
							{
								focusedProject.shortDescription
							}
						</p>
					</motion.div>
				)
			) : undefined}
		</AnimatePresence>
	);
};

export default ProjectImagePreview;
