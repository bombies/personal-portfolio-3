import DreamLoggerContent from '@/app/(site)/projects/components/projects-content/dreamlogger-content';
import GreensPubContent from '@/app/(site)/projects/components/projects-content/greenspub-content';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { GlobeIcon } from 'lucide-react';

import { urlify } from '../../../lib/utils';
import RobertifyContent from './components/projects-content/robertify-content';
import { Project, Technology as Technology } from './types';

export const projects: Project[] = [
	{
		name: 'Robertify',
		details: {
			category: 'Web Development',
			year: [2021, 2024],
			customer: 'Personal Project',
			shortDescription: 'A next-gen Discord music bot with a multitude of features',
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
			Technology.JAVA,
			Technology.KOTLIN,
			Technology.TYPESCRIPT,
			Technology.REACT,
			Technology.NEXTJS,
			Technology.NESTJS,
			Technology.REDIS,
			Technology.MONGODB,
			Technology.TAILWINDCSS,
			Technology.SASS,
			Technology.SPRING,
			Technology.KTOR,
			Technology.INFLUXDB,
			Technology.SENTRY,
			Technology.GITHUB_ACTIONS,
			Technology.GRAFANA,
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
			Technology.TYPESCRIPT,
			Technology.REACT,
			Technology.NEXTJS,
			Technology.TAILWINDCSS,
			Technology.SASS,
			Technology.POSTGRESQL,
			Technology.AWS,
			Technology.GITHUB_ACTIONS,
		],
	},
	{
		name: "Green's Restaurant & Pub Management Dashboard",
		details: {
			category: 'Web Development',
			year: 2021,
			customer: 'Personal Project',
			shortDescription:
				"A dashboard used to handle the managing of Green's Restaurant & Pub",
		},
		links: [
			{
				icon: <SiGithub size={18} />,
				href: 'https://github.com/bombies/greens-restaurant-website',
				label: 'Source Code',
			},
		],
		techStack: [
			Technology.REACT,
			Technology.NEXTJS,
			Technology.TYPESCRIPT,
			Technology.TAILWINDCSS,
			Technology.SASS,
			Technology.MONGODB,
			Technology.GITHUB_ACTIONS,
		],
		longDescription: <GreensPubContent />,
		galleryImages: [
			{
				src: 'https://i.imgur.com/HXphz8i.gif',
				alt: 'Dashboard Home Page',
			},
			{
				src: 'https://i.imgur.com/3sDlDEP.gif',
				alt: 'Inventory Management - Updating Stock',
			},
			{
				src: 'https://i.imgur.com/HE7PgbZ.gif',
				alt: 'Inventory Management - Adding New Stock',
			},
			{
				src: 'https://i.imgur.com/VrAImJI.gif',
				alt: 'Inventory Management - Location Management',
			},
			{
				src: 'https://i.imgur.com/aXUjw8T.gif',
				alt: 'Inventory Management - Item Requests',
			},
			{
				src: 'https://i.imgur.com/gf4mkYl.gif',
				alt: 'Invoice Management - Invoice Creation',
			},
			{
				src: 'https://i.imgur.com/EdS3b7g.gif',
				alt: 'Invoice Management - Invoice Filtering',
			},
			{
				src: 'https://i.imgur.com/PuTKIeS.gif',
				alt: 'Invoice Management - Invoice Reports',
			},
			{
				src: 'https://i.imgur.com/x9gEW1Q.png',
				alt: 'Invoice Management - Example Invoice',
			},
			{
				src: 'https://i.imgur.com/qtUhAh7.png',
				alt: 'User Management - User List',
			},
			{
				src: 'https://i.imgur.com/xeMiGJ9.gif',
				alt: 'User Management - Specific User',
			},
		],
		coverImage: 'https://i.imgur.com/miGtc5e.png',
	},
];

export const projectMapping: Record<string, Project> = projects.reduce(
	(acc, project) => {
		acc[urlify(project.name)] = project;
		return acc;
	},
	{} as Record<string, Project>,
);
