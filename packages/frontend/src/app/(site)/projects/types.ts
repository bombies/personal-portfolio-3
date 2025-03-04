import { GalleryProps } from '@/app/(site)/projects/components/projects-content/utils/gallery';
import {
	IconType,
	SiAmazondynamodb,
	SiAmazonec2,
	SiAmazonecs,
	SiAmazons3,
	SiAmazonsimpleemailservice,
	SiAmazonsqs,
	SiAmazonwebservices,
	SiAwsfargate,
	SiAwslambda,
	SiC,
	SiCplusplus,
	SiCss,
	SiDocker,
	SiExpress,
	SiFastapi,
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
	techStack?: Technology[];
};

export enum Technology {
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
	SASS,

	// Frameworks
	REACT,
	NEXTJS,
	EXPRESS,
	NESTJS,
	FLASK,
	FASTAPI,
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
	DYNAMODB,
	LAMBDA,
	SES,
	SQS,
	S3,
	EC2,
	ECS,
	FARGATE,
}

type TechnologyAttributes = {
	label: string;
	icon: IconType;
};

export const technologyAttributes: Record<Technology, TechnologyAttributes> = {
	[Technology.C]: {
		label: 'C',
		icon: SiC,
	},
	[Technology.CPP]: {
		label: 'C++',
		icon: SiCplusplus,
	},
	[Technology.JAVA]: {
		label: 'Java',
		icon: SiOpenjdk,
	},
	[Technology.KOTLIN]: {
		label: 'Kotlin',
		icon: SiKotlin,
	},
	[Technology.PYTHON]: {
		label: 'Python',
		icon: SiPython,
	},
	[Technology.JAVASCRIPT]: {
		label: 'JavaScript',
		icon: SiJavascript,
	},
	[Technology.TYPESCRIPT]: {
		label: 'TypeScript',
		icon: SiTypescript,
	},
	[Technology.HTML]: {
		label: 'HTML',
		icon: SiHtml5,
	},
	[Technology.CSS]: {
		label: 'CSS',
		icon: SiCss,
	},
	[Technology.SASS]: {
		label: 'Sass',
		icon: SiSass,
	},
	[Technology.REACT]: {
		label: 'React',
		icon: SiReact,
	},
	[Technology.NEXTJS]: {
		label: 'Next.js',
		icon: SiNextdotjs,
	},
	[Technology.EXPRESS]: {
		label: 'Express',
		icon: SiExpress,
	},
	[Technology.NESTJS]: {
		label: 'NestJS',
		icon: SiNestjs,
	},
	[Technology.FLASK]: {
		label: 'Flask',
		icon: SiFlask,
	},
	[Technology.FASTAPI]: {
		label: 'FastAPI',
		icon: SiFastapi,
	},
	[Technology.SPRING]: {
		label: 'Spring',
		icon: SiSpring,
	},
	[Technology.KTOR]: {
		label: 'Ktor',
		icon: SiKtor,
	},
	[Technology.TAILWINDCSS]: {
		label: 'Tailwind CSS',
		icon: SiTailwindcss,
	},
	[Technology.DOCKER]: {
		label: 'Docker',
		icon: SiDocker,
	},
	[Technology.GIT]: {
		label: 'Git',
		icon: SiGit,
	},
	[Technology.GITHUB]: {
		label: 'GitHub',
		icon: SiGithub,
	},
	[Technology.GITLAB]: {
		label: 'GitLab',
		icon: SiGitlab,
	},
	[Technology.AWS]: {
		label: 'AWS',
		icon: SiAmazonwebservices,
	},
	[Technology.NGINX]: {
		label: 'NGINX',
		icon: SiNginx,
	},
	[Technology.REDIS]: {
		label: 'Redis',
		icon: SiRedis,
	},
	[Technology.INFLUXDB]: {
		label: 'InfluxDB',
		icon: SiInfluxdb,
	},
	[Technology.GRAFANA]: {
		label: 'Grafana',
		icon: SiGrafana,
	},
	[Technology.SENTRY]: {
		label: 'Sentry',
		icon: SiSentry,
	},
	[Technology.GITHUB_ACTIONS]: {
		label: 'GitHub Actions',
		icon: SiGithubactions,
	},
	[Technology.MONGODB]: {
		label: 'MongoDB',
		icon: SiMongodb,
	},
	[Technology.POSTGRESQL]: {
		label: 'PostgreSQL',
		icon: SiPostgresql,
	},
	[Technology.DYNAMODB]: {
		label: 'Amazon DynamoDB',
		icon: SiAmazondynamodb,
	},
	[Technology.LAMBDA]: {
		label: 'AWS Lambda',
		icon: SiAwslambda,
	},
	[Technology.SES]: {
		label: 'Amazon SES',
		icon: SiAmazonsimpleemailservice,
	},
	[Technology.SQS]: {
		label: 'Amazon SQS',
		icon: SiAmazonsqs,
	},
	[Technology.S3]: {
		label: 'Amazon S3',
		icon: SiAmazons3,
	},
	[Technology.EC2]: {
		label: 'Amazon EC2',
		icon: SiAmazonec2,
	},
	[Technology.ECS]: {
		label: 'Amazon ECS',
		icon: SiAmazonecs,
	},
	[Technology.FARGATE]: {
		label: 'AWS Fargate',
		icon: SiAwsfargate,
	},
};
