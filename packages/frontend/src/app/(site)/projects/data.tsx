import DreamLoggerContent from '@/app/(site)/projects/components/projects-content/dreamlogger-content';
import EarleWilsonContent from '@/app/(site)/projects/components/projects-content/earle-wilson-content';
import GreensPubContent from '@/app/(site)/projects/components/projects-content/greenspub-content';
import MDGPTContent from '@/app/(site)/projects/components/projects-content/md-gpt-content';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { GlobeIcon } from 'lucide-react';

import { urlify } from '../../../lib/utils';
import LumiContent from './components/projects-content/lumi-content';
import RobertifyContent from './components/projects-content/robertify-content';
import { Project, Technology } from './types';

export const projects: Project[] = [
	{
		name: 'Lumi',
		coverImage: 'https://i.imgur.com/EwcdLPg.png',
		details: {
			category: 'Web Development',
			year: [2025, null],
			customer: 'Personal Project',
			shortDescription:
				'Lumi is a space for you and your partner to share your moments, affirm each other and keep up with your music tastes and recommendations.',
		},
		links: [
			{
				icon: <SiGithub size={18} />,
				href: 'https://github.com/bombies/lumi',
				label: 'Source Code',
			},
		],
		longDescription: <LumiContent />,
		galleryImages: [
			{
				src: 'https://i.imgur.com/wn2Nt4J.png',
				alt: 'Lumi Landing Page',
			},
			{
				src: 'https://i.imgur.com/Axfoa50.png',
				alt: 'Lumi Login Page',
			},
			{
				src: 'https://i.imgur.com/iBOxSAt.png',
				alt: 'Lumi Home Page (1)',
			},
			{
				src: 'https://i.imgur.com/HsZG5Mc.png',
				alt: 'Lumi Home Page (2)',
			},
			{
				src: 'https://i.imgur.com/7S3zRr1.png',
				alt: 'Lumi Home Page (3)',
			},
			{
				src: 'https://i.imgur.com/p16IV6O.png',
				alt: 'Lumi Affirmations Page',
			},
			{
				src: 'https://i.imgur.com/ttN64iH.png',
				alt: 'Lumi Manage Affirmations Page',
			},
			{
				src: 'https://i.imgur.com/xmNeZU9.png',
				alt: 'Lumi Moments Page',
			},
			{
				src: 'https://i.imgur.com/O5LpPpO.png',
				alt: 'Lumi Upload Moment Page (1)',
			},
			{
				src: 'https://i.imgur.com/myugYiQ.png',
				alt: 'Lumi Upload Moment Page (2)',
			},
			{
				src: 'https://i.imgur.com/SDtPfdg.png',
				alt: 'Lumi Moment Watch Page (1)',
			},
			{
				src: 'https://i.imgur.com/y5RhbEm.png',
				alt: 'Lumi Moment Watch Page (2)',
			},
			{
				src: 'https://i.imgur.com/vex6v3h.png',
				alt: 'Lumi Tagged Moments Page',
			},
			{
				src: 'https://i.imgur.com/nbwxE9j.png',
				alt: 'Lumi Music Sharing Page',
			},
			{
				src: 'https://i.imgur.com/0BxYrDd.png',
				alt: 'Lumi Music Sharing Page - Recommendation History',
			},
			{
				src: 'https://i.imgur.com/kjgap4d.png',
				alt: 'Lumi Music Sharing Page - Recommendation Rate Details',
			},
			{
				src: 'https://i.imgur.com/OpOPjxe.png',
				alt: 'Lumi Music Sharing Page - Song Recommendation Picker',
			},
			{
				src: 'https://i.imgur.com/NuIeMDJ.png',
				alt: 'Lumi Music Sharing Page - Song Recommendation Listen',
			},
			{
				src: 'https://i.imgur.com/FLD449z.png',
				alt: 'Lumi Music Sharing Page - Song Recommendation Rate',
			},
			{
				src: 'https://i.imgur.com/WNFW2RJ.png',
				alt: 'Lumi Notifications Management Page',
			},
			{
				src: 'https://i.imgur.com/uF0bNN1.png',
				alt: 'Lumi Settings Page',
			},
			{
				src: 'https://i.imgur.com/m5pV5iN.png',
				alt: 'Lumi Relationship Settings Page',
			},
			{
				src: 'https://i.imgur.com/3WpqZpL.jpeg',
				alt: 'Lumi Example Notification',
			},
		],
		techStack: [
			Technology.AWS,
			Technology.SST,
			Technology.LAMBDA,
			Technology.DYNAMODB,
			Technology.POSTGRESQL,
			Technology.EVENT_BRIDGE,
			Technology.IOT_CORE,
			Technology.S3,
			Technology.CLOUDFRONT,
			Technology.SQS,
			Technology.REDIS,

			Technology.TRPC,
			Technology.NEXTJS,
			Technology.REACT,
			Technology.CSS,
			Technology.TAILWINDCSS,

			Technology.SENTRY,
			Technology.CLOUDWATCH,
			Technology.GITHUB_ACTIONS,
		],
	},
	{
		name: 'Robertify',
		coverImage: 'https://i.imgur.com/sKrjmkH.png',
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
			year: [2023, null],
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
		coverImage: 'https://i.imgur.com/mcXQTJo.png',
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
				firstFrame: '/greens-pub/HXphz8i.jpg',
				alt: 'Dashboard Home Page',
			},
			{
				src: 'https://i.imgur.com/3sDlDEP.gif',
				firstFrame: '/greens-pub/3sDlDEP.jpg',
				alt: 'Inventory Management - Updating Stock',
			},
			{
				src: 'https://i.imgur.com/HE7PgbZ.gif',
				firstFrame: '/greens-pub/HE7PgbZ.jpg',
				alt: 'Inventory Management - Adding New Stock',
			},
			{
				src: 'https://i.imgur.com/VrAImJI.gif',
				firstFrame: '/greens-pub/VrAImJI.jpg',
				alt: 'Inventory Management - Location Management',
			},
			{
				src: 'https://i.imgur.com/aXUjw8T.gif',
				firstFrame: '/greens-pub/aXUjw8T.jpg',
				alt: 'Inventory Management - Item Requests',
			},
			{
				src: 'https://i.imgur.com/gf4mkYl.gif',
				firstFrame: '/greens-pub/gf4mkYl.jpg',
				alt: 'Invoice Management - Invoice Creation',
			},
			{
				src: 'https://i.imgur.com/EdS3b7g.gif',
				firstFrame: '/greens-pub/EdS3b7g.jpg',
				alt: 'Invoice Management - Invoice Filtering',
			},
			{
				src: 'https://i.imgur.com/PuTKIeS.gif',
				firstFrame: '/greens-pub/PuTKIeS.jpg',
				alt: 'Invoice Management - Invoice Reports',
			},
			{
				src: 'https://i.imgur.com/x9gEW1Q.png',
				firstFrame: '/greens-pub/x9gEW1Q.jpg',
				alt: 'Invoice Management - Example Invoice',
			},
			{
				src: 'https://i.imgur.com/qtUhAh7.png',
				alt: 'User Management - User List',
			},
			{
				src: 'https://i.imgur.com/xeMiGJ9.gif',
				firstFrame: '/greens-pub/xeMiGJ9.jpg',
				alt: 'User Management - Specific User',
			},
		],
		coverImage: 'https://i.imgur.com/uV77dgo.png',
	},
	{
		name: 'MD-GPT',
		details: {
			category: 'Machine Learning/Artificial Intelligence (ML/AI)',
			year: [2023, 2024],
			customer: 'Personal Project',
			shortDescription:
				'MD-GPT started as a wild idea during an AI hackathon I attended with two school mates for the Jamaica Artificial Intelligence Association (JAIA) in 2023. We literally hacked it together in just 8 hours, driven by our curiosity about how AI could help doctors manage patient data and consultations more efficiently. What began as a rapid prototype soon evolved into a full-fledged project for our AI course in 2024.',
		},
		links: [
			{
				href: 'https://github.com/bombies/md-gpt',
				label: 'Source Code',
				icon: <SiGithub size={18} />,
			},
		],
		coverImage: 'https://i.imgur.com/IVNC0NV.png',
		longDescription: <MDGPTContent />,
		techStack: [
			Technology.PYTHON,
			Technology.FASTAPI,
			Technology.MONGODB,
			Technology.TYPESCRIPT,
			Technology.REACT,
			Technology.NEXTJS,
			Technology.SASS,
			Technology.TAILWINDCSS,
		],
		galleryImages: [
			{
				src: 'https://i.imgur.com/IVNC0NV.png',
				alt: 'MD-GPT Landing Page',
			},
			{
				src: 'https://i.imgur.com/bvLRHtg.gif',
				alt: 'MD-GPT Dashboard',
			},
			{
				src: 'https://i.imgur.com/unOGdJj.gif',
				alt: 'MD-GPT Patient Consultation',
			},
		],
	},
	{
		name: 'Earle & Wilson | Law Firm Website',
		coverImage: 'https://i.imgur.com/6vczglZ.png',
		details: {
			category: 'Web Development',
			year: 2024,
			customer: 'Earle & Wilson',
			shortDescription:
				'A website for a law firm that provides legal services in Jamaica.',
		},
		links: [
			{
				href: 'https://earlewilson.com',
				label: 'Live Website',
				icon: <GlobeIcon size={18} />,
			},
		],
		techStack: [
			Technology.REACT,
			Technology.NEXTJS,
			Technology.TYPESCRIPT,
			Technology.TAILWINDCSS,
			Technology.SASS,
			Technology.GITHUB_ACTIONS,
			Technology.POSTGRESQL,
			Technology.REDIS,
			Technology.NGINX,
			Technology.SENTRY,
		],
		longDescription: <EarleWilsonContent />,
		galleryImages: [
			{
				src: 'https://i.imgur.com/WGZfNiS.png',
				alt: 'Earle & Wilson Home Page',
			},
			{
				src: 'https://i.imgur.com/QZjbzGi.png',
				alt: 'Earle & Wilson Contact Form',
			},
			{
				src: 'https://i.imgur.com/Bxte3g3.gif',
				alt: 'Earle & Wilson Practice Areas',
			},
			{
				src: 'https://i.imgur.com/Xl3pHpn.png',
				alt: 'Earle & Wilson Example Practice Area',
			},
			{
				src: 'https://i.imgur.com/OeqdIa7.png',
				alt: 'Earle & Wilson Team Page',
			},
			{
				src: 'https://i.imgur.com/3VvMnLn.gif',
				alt: 'Earle & Wilson Example Team Member',
			},
			{
				src: 'https://i.imgur.com/qciq5Zd.gif',
				alt: 'Earle & Wilson Custom CMS',
			},
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
