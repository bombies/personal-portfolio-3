import { GalleryProps } from '@/app/(site)/projects/components/projects-content/utils/gallery';
import {
	IconType,
	SiAmazonwebservices,
	SiC,
	SiCplusplus,
	SiCss,
	SiDocker,
	SiExpress,
	SiFlask,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGitlab,
	SiGrafana,
	SiHtml5,
	SiInfluxdb,
	SiJavascript,
	SiKotlin,
	SiKtor,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiOpenjdk,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiSass,
	SiSentry,
	SiSpring,
	SiTailwindcss,
	SiTypescript,
} from '@icons-pack/react-simple-icons';
import { ReactNode } from 'react';

export type Project = {
	name: string;
	details: {
		category: string;
		year: number | [number, number | null];
		customer?: string;
		shortDescription: ReactNode;
	};
	longDescription: ReactNode;
	links?: {
		icon?: ReactNode;
		label: string;
		href: string;
	}[];
	coverImage?: string;
	galleryImages?: GalleryProps['images'];
	techStack?: Technoloy[];
};

export enum Technoloy {
	// Languages
	C,
	CPP,
	JAVA,
	KOTLIN,
	PYTHON,
	JAVASCRIPT,
	TYPESCRIPT,
	HTML,
	CSS,
	Sass,

	// Frameworks
	REACT,
	NEXTJS,
	EXPRESS,
	NESTJS,
	FLASK,
	SPRING,
	KTOR,

	// Libraries
	TAILWINDCSS,

	// Tools
	DOCKER,
	GIT,
	GITHUB,
	GITLAB,
	AWS,
	NGINX,
	REDIS,
	INFLUXDB,
	GRAFANA,
	SENTRY,
	GITHUB_ACTIONS,
	MONGODB,
	POSTGRESQL,
}

type TechnologyAttributes = {
	label: string;
	icon: IconType;
};

export const technologyAttributes: Record<Technoloy, TechnologyAttributes> = {
	[Technoloy.C]: {
		label: 'C',
		icon: SiC,
	},
	[Technoloy.CPP]: {
		label: 'C++',
		icon: SiCplusplus,
	},
	[Technoloy.JAVA]: {
		label: 'Java',
		icon: SiOpenjdk,
	},
	[Technoloy.KOTLIN]: {
		label: 'Kotlin',
		icon: SiKotlin,
	},
	[Technoloy.PYTHON]: {
		label: 'Python',
		icon: SiPython,
	},
	[Technoloy.JAVASCRIPT]: {
		label: 'JavaScript',
		icon: SiJavascript,
	},
	[Technoloy.TYPESCRIPT]: {
		label: 'TypeScript',
		icon: SiTypescript,
	},
	[Technoloy.HTML]: {
		label: 'HTML',
		icon: SiHtml5,
	},
	[Technoloy.CSS]: {
		label: 'CSS',
		icon: SiCss,
	},
	[Technoloy.Sass]: {
		label: 'Sass',
		icon: SiSass,
	},
	[Technoloy.REACT]: {
		label: 'React',
		icon: SiReact,
	},
	[Technoloy.NEXTJS]: {
		label: 'Next.js',
		icon: SiNextdotjs,
	},
	[Technoloy.EXPRESS]: {
		label: 'Express',
		icon: SiExpress,
	},
	[Technoloy.NESTJS]: {
		label: 'NestJS',
		icon: SiNestjs,
	},
	[Technoloy.FLASK]: {
		label: 'Flask',
		icon: SiFlask,
	},
	[Technoloy.SPRING]: {
		label: 'Spring',
		icon: SiSpring,
	},
	[Technoloy.KTOR]: {
		label: 'Ktor',
		icon: SiKtor,
	},
	[Technoloy.TAILWINDCSS]: {
		label: 'Tailwind CSS',
		icon: SiTailwindcss,
	},
	[Technoloy.DOCKER]: {
		label: 'Docker',
		icon: SiDocker,
	},
	[Technoloy.GIT]: {
		label: 'Git',
		icon: SiGit,
	},
	[Technoloy.GITHUB]: {
		label: 'GitHub',
		icon: SiGithub,
	},
	[Technoloy.GITLAB]: {
		label: 'GitLab',
		icon: SiGitlab,
	},
	[Technoloy.AWS]: {
		label: 'AWS',
		icon: SiAmazonwebservices,
	},
	[Technoloy.NGINX]: {
		label: 'NGINX',
		icon: SiNginx,
	},
	[Technoloy.REDIS]: {
		label: 'Redis',
		icon: SiRedis,
	},
	[Technoloy.INFLUXDB]: {
		label: 'InfluxDB',
		icon: SiInfluxdb,
	},
	[Technoloy.GRAFANA]: {
		label: 'Grafana',
		icon: SiGrafana,
	},
	[Technoloy.SENTRY]: {
		label: 'Sentry',
		icon: SiSentry,
	},
	[Technoloy.GITHUB_ACTIONS]: {
		label: 'GitHub Actions',
		icon: SiGithubactions,
	},
	[Technoloy.MONGODB]: {
		label: 'MongoDB',
		icon: SiMongodb,
	},
	[Technoloy.POSTGRESQL]: {
		label: 'PostgreSQL',
		icon: SiPostgresql,
	},
};
