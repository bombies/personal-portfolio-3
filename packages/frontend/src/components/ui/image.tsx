'use client';

import clsx from 'clsx';
import { MotionProps, motion } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import NextImage, { ImageProps } from 'next/image';
import { CSSProperties, FC, useState } from 'react';

import { cn } from '../../lib/utils';

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

type Props = Omit<ImageProps, 'objectFit' | 'src' | 'className' | 'style'> & {
	imgWidth?: number;
	imgHeight?: number;
	classNames?: {
		global?: string;
		container?: string;
		image?: string;
	};
	styles?: CSSProperties;
	fadeIn?: boolean;
	objectFit?: ObjectFit;
	fallbackSrc?: string;
	src?: string | StaticImport | null;
	animation?: MotionProps;
};

const Image: FC<Props> = ({
	fadeIn,
	imgWidth,
	imgHeight,
	classNames,
	styles,
	width,
	height,
	objectFit,
	fallbackSrc = '/images/no-img.jpg',
	src,
	animation,
	...props
}) => {
	const [currentSrc, setCurrentSrc] = useState<typeof src>(src);

	return (
		<motion.div
			initial={fadeIn ? { opacity: 0, y: -50 } : undefined}
			whileInView={fadeIn ? { opacity: 1, y: 0 } : undefined}
			transition={fadeIn ? { duration: 0.5 } : undefined}
			viewport={fadeIn ? { once: true } : undefined}
			{...animation}
			className={clsx(
				'relative overflow-hidden',
				classNames?.global,
				classNames?.container,
			)}
			style={{
				width: width && `${width}rem`,
				height: width && `${height ?? width}rem`,
				...styles,
			}}
		>
			<NextImage
				{...props}
				src={currentSrc || fallbackSrc}
				onError={() => {
					if (fallbackSrc)
						setCurrentSrc(fallbackSrc);
				}}
				className={cn(
					classNames?.global,
					classNames?.image,
				)}
				width={imgWidth}
				height={imgHeight}
				style={{ objectFit }}
				draggable={false}
			/>
		</motion.div>
	);
};

export default Image;
