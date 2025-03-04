'use client';

import Gallery from '@/app/(site)/projects/components/projects-content/utils/gallery';
import { Project, technologyAttributes } from '@/app/(site)/projects/types';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import BadgeButton from '@/components/ui/badge-button';
import Image from '@/components/ui/image';
import { Separator } from '@/components/ui/separator';
import Title from '@/components/ui/title';
import { useExtractColors } from '@/lib/hooks/extract-colors/useExtractColors';
import { ArrowUpRightIcon } from 'lucide-react';
import { FC, ReactNode } from 'react';

type Props = {
	project: Project;
};

const ProjectPageDetails: FC<Props> = ({ project }) => {
	const { dominantColor } = useExtractColors(project.coverImage, {
		format: 'hex',
	});

	return (
		<>
			{project.coverImage ? (
				<Image
					src={project.coverImage}
					alt="Project Preview"
					fill
					styles={{
						backgroundColor: dominantColor ? `${dominantColor}50` : undefined,
						boxShadow: `0 20px 25px -5px ${dominantColor}15, 0 8px 10px -6px ${dominantColor}15`,
					}}
					classNames={{
						container:
							'place-self-center flex backdrop-blur-md w-full h-96 rounded-md border border-border transition-colors',
					}}
					objectFit="contain"
				/>
			) : (
				<div
					style={{
						boxShadow: `0 20px 25px -5px ${dominantColor}15, 0 8px 10px -6px ${dominantColor}15`,
					}}
					className="place-self-center flex w-full h-96 rounded-md border border-border bg-primary/10 justify-center flex-col items-center gap-2 p-16 overflow-hidden"
				>
					<p className="text-5xl font-bold text-center line-clamp-2 overflow-ellipsis">
						{project.name}
					</p>
				</div>
			)}
			<Title>{project.name}</Title>
			{project.links?.length ? (
				<div className="flex flex-wrap gap-3">
					{project.links.map((link, idx) => (
						<BadgeButton
							key={`external_proj_link#${project.name}#${link.href}#${idx}`}
							newTab
							href={link.href}
						>
							{link.icon ?? <ArrowUpRightIcon size={18} />} {link.label}
						</BadgeButton>
					))}
				</div>
			) : undefined}
			<Separator />
			<div className="grid grid-cols-2 gap-y-8 gap-x-4">
				<ProjectDetailsRow label="Category" value={project.details.category} />
				<ProjectDetailsRow
					label="Year"
					value={
						typeof project.details.year === 'number'
							? project.details.year
							: `${project.details.year[0]} - ${project.details.year[1] === null ? 'Present' : project.details.year[1]}`
					}
				/>
				<ProjectDetailsRow label="Customer" value={project.details.customer} />
			</div>
			<p className="mt-6 text-lg">{project.details.shortDescription}</p>
			{project.techStack?.length ? (
				<Accordion type="single" collapsible>
					<AccordionItem value="tech-stack">
						<AccordionTrigger className="font-bold text-3xl text-secondary">
							Tech Stack
						</AccordionTrigger>
						<AccordionContent className="flex flex-wrap gap-2">
							{project.techStack.map((technology, idx) => {
								const attributes = technologyAttributes[technology];
								return (
									<Badge
										key={`tech_stack#${project.name}#${technology}#${idx}`}
										variant="outline"
										className="text-sm tablet:text-lg"
									>
										<attributes.icon className="!size-4 tablet:!size-5 mr-1" />
										{attributes.label}
									</Badge>
								);
							})}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			) : undefined}
			<Separator />
			{project.longDescription}
			{project.galleryImages?.length ? (
				<>
					<Separator className="my-6" />
					<h3 className="text-3xl text-secondary font-bold mb-6">Gallery</h3>
					<Gallery images={project.galleryImages} />
				</>
			) : undefined}
		</>
	);
};

type ProjectDetailsRowProps = {
	label: ReactNode;
	value: ReactNode;
};

const ProjectDetailsRow: FC<ProjectDetailsRowProps> = ({ label, value }) => {
	return (
		<>
			<h3 className="uppercase font-bold tracking-widest text-primary">{label}</h3>
			<p className={`font-mono`}>{value}</p>
		</>
	);
};

export default ProjectPageDetails;
