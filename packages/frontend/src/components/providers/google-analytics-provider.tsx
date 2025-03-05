'use client';

import Script from 'next/script';
import { FC } from 'react';

type Props = {
	gaId: string;
	onLoadCallback?: () => void;
};

const GoogleAnalyticsProvider: FC<Props> = ({ gaId, onLoadCallback }) => {
	return (
		<>
			{
				<>
					<Script
						id="gtm-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            window.gtag = function(){ window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
            });
            window.gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
					{/* Load the GTM script via src to enable onLoad callback */}
					<Script
						id="gtm-script"
						src={`https://www.googletagmanager.com/gtm.js?id=${gaId}`}
						strategy="afterInteractive"
						onLoad={onLoadCallback}
					/>
				</>
			}
		</>
	);
};

export default GoogleAnalyticsProvider;
