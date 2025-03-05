'use client';

import { useCookieConsent } from '@/lib/hooks/local-storage/useCookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';
import { FC, PropsWithChildren } from 'react';

const GoogleAnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
	const { getConsent } = useCookieConsent();

	return (
		<>
			{children}
			{getConsent('analytics') ? (
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
			) : undefined}
		</>
	);
};

export default GoogleAnalyticsProvider;
