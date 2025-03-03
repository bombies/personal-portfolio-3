'use client';

import { AnimatePresence, motion } from 'motion/react';
import { FC, useMemo } from 'react';

import Image from '../../../../components/ui/image';
import { useExtractColors } from '../../../../lib/hooks/extract-colors/useExtractColors';
import { useProjectPreviewData } from './project-preview-provider';

const ProjectImagePreview: FC = () => {
	const { focusedProject } = useProjectPreviewData();
	const image = useMemo(
		() => focusedProject?.coverImage,
		[focusedProject?.coverImage],
	);
	const { dominantColor } = useExtractColors(image, {
		format: 'hex',
	});

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
						styles={{
							backgroundColor:
								dominantColor
									? `${dominantColor}50`
									: undefined,
						}}
						classNames={{
							container: 'hidden laptop:flex laptop:w-1/2 backdrop-blur-md h-full rounded-md border border-border',
						}}
						objectFit="contain"
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
					</motion.div>
				)
			) : undefined}
		</AnimatePresence>
	);
};

export default ProjectImagePreview;
