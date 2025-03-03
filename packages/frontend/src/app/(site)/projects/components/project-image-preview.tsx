'use client';

import { AnimatePresence, motion } from 'motion/react';
import { FC, useMemo } from 'react';

import Image from '../../../../components/ui/image';
import { useExtractColors } from '../../../../lib/hooks/extract-colors/useExtractColors';
import { useProjectPreviewData } from './project-preview-provider';

const ProjectImagePreview: FC = () => {
	const { focusedProject } = useProjectPreviewData();
	const image = useMemo(() => focusedProject?.coverImage, [focusedProject?.coverImage]);
	const { dominantColor } = useExtractColors(image, {
		format: 'hex',
	});

	return (
		<AnimatePresence>
			{focusedProject && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					style={{
						backgroundColor:
							image && (dominantColor ? `${dominantColor}50` : undefined),
					}}
					className="flex laptop:w-1/2 backdrop-blur-md h-full rounded-md border border-border bg-accent/10 justify-center flex-col items-center gap-2 overflow-hidden"
				>
					{image ? (
						<Image
							key={`project-image-${image}`}
							animation={{
								initial: {
									opacity: 0,
									scale: 0.9,
								},
								animate: {
									opacity: 1,
									scale: 1,
								},
								exit: { opacity: 0, scale: 0.9 },
								transition: {
									duration: 0.75,
								},
							}}
							src={image}
							alt="Project Preview"
							fill
							classNames={{
								container: 'hidden laptop:flex w-full h-full',
							}}
							objectFit="contain"
						/>
					) : (
						<motion.p
							initial={{
								opacity: 0,
								scale: 0.9,
							}}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{
								duration: 0.75,
							}}
							className="p-16 hidden laptop:flex text-5xl font-bold text-center line-clamp-2 overflow-ellipsis"
						>
							{focusedProject.name}
						</motion.p>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ProjectImagePreview;
