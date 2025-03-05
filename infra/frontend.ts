import { googleAnalyticsSecret } from './secrets';

export const frontend = new sst.aws.Nextjs('Frontend', {
	path: 'packages/frontend',
	dev: {
		command: 'bun run dev',
	},
	openNextVersion: '3.5.1',
	link: [googleAnalyticsSecret],
	domain: $app.stage === 'production' ? 'ajani.me' : undefined,
	environment: {
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: googleAnalyticsSecret.value,
	},
});
