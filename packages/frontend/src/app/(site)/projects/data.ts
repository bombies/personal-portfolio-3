import { IconType } from '@icons-pack/react-simple-icons';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

import { urlify } from '../../../lib/utils';

export type Project = {
	name: string;
	shortDescription: ReactNode;
	longDescription: ReactNode;
	links?: { icon: LucideIcon | IconType; label: string; href: string }[];
	images?: string[];
};

export const projects: Project[] = [
	{
		name: 'Robertify',
		shortDescription: 'A next-gen Discord music bot with a multitude of features.',
		longDescription:
			'A next-gen Discord music bot with a multitude of features.',
	},
	{
		name: 'Robertify2',
		shortDescription: 'A next-gen Discord music bot with a multitude of features.',
		longDescription:
			'A next-gen Discord music bot with a multitude of features.',
		images: ['https://i.imgur.com/zxmjJqa.png'],
	},
];

export const projectMapping: Record<string, Project> = projects.reduce(
	(acc, project) => {
		acc[urlify(project.name)] = project;
		return acc;
	},
	{} as Record<string, Project>,
);
