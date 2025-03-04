'use client';

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { FC, useEffect, useMemo, useState } from 'react';

import {
	Dialog,
	DialogContent,
	DialogTitle,
} from '../../../../../../components/ui/dialog';
import Image from '../../../../../../components/ui/image';
import { cn } from '../../../../../../lib/utils';

export type GalleryProps = {
	className?: string;
	images: (string | { src: string; alt?: string; firstFrame?: string })[];
};

const Gallery: FC<GalleryProps> = ({ images, className }) => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();
	const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState<number>();

	useEffect(() => {
		if (galleryDialogOpen && carouselApi && currentImage !== undefined)
			carouselApi.scrollTo(currentImage);
	}, [carouselApi, currentImage, galleryDialogOpen]);

	const imageElements = useMemo(
		() =>
			images.map((image, idx) => (
				<Image
					key={`gallery_image#${typeof image === 'string' ? image : image.src}$${idx}`}
					classNames={{
						image: 'aspect-16/9',
						container: 'border border-border',
						global: 'rounded-lg w-full h-[216px] cursor-pointer',
					}}
					onClick={() => {
						setCurrentImage(idx);
						setGalleryDialogOpen(true);
					}}
					fill
					src={typeof image === 'string' ? image : image.src}
					firstFrame={typeof image === 'object' ? image.firstFrame : undefined}
					alt={typeof image === 'string' ? '' : (image.alt ?? '')}
					objectFit="contain"
				/>
			)),
		[images],
	);

	const imageCarouselElements = useMemo(
		() =>
			images.map((image, idx) => (
				<CarouselItem
					key={`gallery_carousel_image#${typeof image === 'string' ? image : image.src}$${idx}`}
				>
					<Image
						classNames={{
							image: 'aspect-16/9',
							container: 'border border-border',
							global: 'rounded-lg w-full h-[57.5vh] cursor-pointer',
						}}
						fill
						src={typeof image === 'string' ? image : image.src}
						alt={typeof image === 'string' ? '' : (image.alt ?? '')}
						objectFit="contain"
					/>
					{typeof image === 'object' && image.alt && (
						<p className="text-center text-sm h-fit grow-0 text-foreground-secondary mt-2">
							{image.alt}
						</p>
					)}
				</CarouselItem>
			)),
		[images],
	);

	return (
		<>
			<Dialog
				open={galleryDialogOpen}
				onOpenChange={val => {
					if (!val) setCurrentImage(undefined);
					setGalleryDialogOpen(val);
				}}
			>
				<DialogContent className="flex flex-col w-screen max-w-screen tablet:max-w-7xl h-[65vh] px-20">
					<DialogTitle hidden>Image Preview</DialogTitle>
					<Carousel setApi={setCarouselApi} className="w-full h-full">
						<CarouselContent>{imageCarouselElements}</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</DialogContent>
			</Dialog>
			<div className={cn('grid grid-cols-1 tablet:grid-cols-2 gap-4', className)}>
				{imageElements}
			</div>
		</>
	);
};

export default Gallery;
