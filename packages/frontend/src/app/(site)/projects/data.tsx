import DreamLoggerContent from '@/app/(site)/projects/components/projects-content/dreamlogger-content';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { GlobeIcon } from 'lucide-react';

import { urlify } from '../../../lib/utils';
import RobertifyContent from './components/projects-content/robertify-content';
import { Project, Technoloy } from './types';

export const projects: Project[] = [
	{
		name: 'Robertify',
		details: {
			category: 'Web Development',
			year: [2021, 2024],
			customer: 'Personal Project',
			shortDescription:
				'A next-gen Discord music bot with a multitude of features',
		},
		links: [
			{
				icon: <SiGithub size={18} />,
				href: 'https://github.com/bombies/robertify-bot',
				label: 'Bot Repository',
			},
			{
				icon: <SiGithub size={18} />,
				href: 'https://github.com/bombies/robertify-website',
				label: 'Website Repository',
			},
			{
				icon: <SiGithub size={18} />,
				href: 'https://github.com/bombies/robertify-api',
				label: 'API Repository',
			},
		],
		longDescription: <RobertifyContent />,
		galleryImages: [
			{
				src: 'https://i.imgur.com/m2jxRtf.png',
				alt: 'Robertify Home Page - Dark Mode',
			},
			{
				src: 'https://i.imgur.com/b6g8wbJ.png',
				alt: 'Robertify Home Page - Light Mode',
			},
			{
				src: 'https://i.imgur.com/do0JwZY.png',
				alt: 'Robertify Documentation',
			},

			{
				src: 'https://i.imgur.com/fA0bCEL.png',
				alt: 'Robertify Dashboard - Server List',
			},

			{
				src: 'https://i.imgur.com/sSDPqig.png',
				alt: 'Robertify Player',
			},

			{
				src: 'https://i.imgur.com/ZZT2qBx.png',
				alt: 'Robertify Feature List',
			},
		],
		techStack: [
			Technoloy.JAVA,
			Technoloy.KOTLIN,
			Technoloy.TYPESCRIPT,
			Technoloy.REACT,
			Technoloy.NEXTJS,
			Technoloy.NESTJS,
			Technoloy.REDIS,
			Technoloy.MONGODB,
			Technoloy.TAILWINDCSS,
			Technoloy.Sass,
			Technoloy.SPRING,
			Technoloy.KTOR,
			Technoloy.INFLUXDB,
			Technoloy.SENTRY,
			Technoloy.GITHUB_ACTIONS,
			Technoloy.GRAFANA,
		],
	},
	{
		name: 'DreamLogger',
		details: {
			category: 'Web Development',
			year: 2021,
			customer: 'Personal Project',
			shortDescription:
				"DreamLogger is a showcase of my proficiency in full-stack web development, featuring a captivating Next.js front-end enriched with TypeScript, SASS, TailwindCSS, and UI libraries. The application's robust back-end utilizes Prisma for efficient database queries, Next-Auth for secure user authentication, and leverages AWS components like S3, CloudFront, and Route53 for scalability. The meticulous design process, initiated in Figma, resulted in a seamless user experience, ensuring dream enthusiasts can effortlessly log, categorize, and share their dreams while exploring personalized features like the Dream Calendar, custom tags, and character tracking. DreamLogger represents not just a web application, but a fusion of innovative technologies and thoughtful design, encapsulating the potential of modern web development.",
		},
		links: [
			{
				label: 'Live Website',
				href: 'https://dreamlogger.ajani.me',
				icon: <GlobeIcon size={18} />,
			},
			{
				label: 'Source Code',
				href: 'https://github.com/bombies/dream-logger-website',
				icon: <SiGithub size={18} />,
			},
		],
		longDescription: <DreamLoggerContent />,
		galleryImages: [
			{
				src: 'https://i.ajani.me/images/9sdz6.png',
				alt: 'DreamLogger Landing Page',
			},
			{
				src: 'https://i.ajani.me/images/jk6jg.png',
				alt: 'DreamLogger Authentication Page',
			},
			{
				src: 'https://i.ajani.me/images/yo6qa.png',
				alt: 'DreamLogger Dream Dashboard',
			},
			{
				src: 'https://i.ajani.me/images/8udvr.gif',
				alt: 'DreamLogger Dream Dashboard - Dream Logging',
			},
			{
				src: 'https://i.ajani.me/images/plowk.gif',
				alt: 'DreamLogger Dream Dashboard - Dream Management',
			},
			{
				src: 'https://i.ajani.me/images/gg6pn.png',
				alt: 'DreamLogger Dream Dashboard - Dream Drafts',
			},
			{
				src: 'https://i.ajani.me/images/pkwc5.png',
				alt: 'DreamLogger Dream Dashboard - Dream Calendar',
			},
			{
				src: 'https://i.ajani.me/images/6f0me.png',
				alt: 'DreamLogger Dream Dashboard - Dream Calendar Mobile',
			},
			{
				src: 'https://i.ajani.me/images/pqi0f.gif',
				alt: 'DreamLogger Dream Dashboard - Characters & Tags',
			},
			{
				src: 'https://i.ajani.me/images/nhgzk.gif',
				alt: 'DreamLogger Dream Dashboard - Dream Search',
			},
			{
				src: 'https://i.ajani.me/images/8v2ck.gif',
				alt: 'DreamLogger Account Settings',
			},
			{
				src: 'https://i.ajani.me/images/6uoys.png',
				alt: 'DreamLogger Dream Dashboard - Light Mode',
			},
		],
		coverImage: 'https://i.imgur.com/La9GIDU.jpeg',
		techStack: [
			Technoloy.TYPESCRIPT,
			Technoloy.REACT,
			Technoloy.NEXTJS,
			Technoloy.TAILWINDCSS,
			Technoloy.Sass,
			Technoloy.POSTGRESQL,
			Technoloy.AWS,
			Technoloy.GITHUB_ACTIONS,
		],
	},
];

export const projectMapping: Record<string, Project> = projects.reduce(
	(acc, project) => {
		acc[urlify(project.name)] = project;
		return acc;
	},
	{} as Record<string, Project>,
);
