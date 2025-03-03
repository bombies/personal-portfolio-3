'use client';

import { FC, useMemo } from 'react';

import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '../../../../../../components/ui/dialog';
import Image from '../../../../../../components/ui/image';
import { cn } from '../../../../../../lib/utils';

export type GalleryProps = {
	className?: string;
	images: (string | { src: string; alt?: string })[];
};

const Gallery: FC<GalleryProps> = ({ images, className }) => {
	const imageElements = useMemo(
		() =>
			images.map((image, idx) => (
				<Dialog
					key={`gallery_image#${typeof image === 'string' ? image : image.src}$${idx}`}
				>
					<DialogTrigger asChild>
						<Image
							classNames={{
								image: 'aspect-16/9',
								container: 'border border-border',
								global: 'rounded-lg w-full h-[216px] cursor-pointer',
							}}
							fill
							src={
								typeof image ===
								'string'
									? image
									: image.src
							}
							alt={
								typeof image ===
								'string'
									? ''
									: (image.alt ??
										'')
							}
							objectFit="contain"
						/>
					</DialogTrigger>
					<DialogContent className="flex flex-col w-screen max-w-screen tablet:max-w-7xl h-[65vh] pl-2 pr-10">
						<DialogTitle hidden>
							{typeof image ===
							'object'
								? (image.alt ??
									'Image Preview')
								: 'Image Preview'}
						</DialogTitle>
						<Image
							classNames={{
								image: 'aspect-16/9',
								container: 'border border-border',
								global: 'rounded-lg w-full h-full cursor-pointer',
							}}
							fill
							src={
								typeof image ===
								'string'
									? image
									: image.src
							}
							alt={
								typeof image ===
								'string'
									? ''
									: (image.alt ??
										'')
							}
							objectFit="contain"
						/>
						{typeof image === 'object' &&
							image.alt && (
								<p className="text-center text-sm h-fit grow-0 text-foreground-secondary mt-2">
									{
										image.alt
									}
								</p>
							)}
					</DialogContent>
				</Dialog>
			)),
		[images],
	);

	return (
		<div
			className={cn(
				'grid grid-cols-1 tablet:grid-cols-2 gap-4',
				className,
			)}
		>
			{imageElements}
		</div>
	);
};

export default Gallery;
