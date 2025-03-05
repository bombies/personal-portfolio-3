'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useCookieConsent } from '@/lib/hooks/local-storage/useCookieConsent';
import { AnimatePresence, motion } from 'motion/react';
import { FC } from 'react';

const CookieConsentBanner: FC = () => {
	const { consentAwaiting, initConsentValues } = useCookieConsent();

	return (
		<AnimatePresence>
			{consentAwaiting() === true ? (
				<motion.div
					initial={{
						opacity: 0,
						bottom: -100,
					}}
					animate={{
						opacity: 1,
						bottom: 10,
					}}
					exit={{
						opacity: 0,
						bottom: -100,
					}}
					className="z-[49] fixed flex justify-center w-full"
				>
					<Card className="tablet:max-w-lg">
						<CardHeader>
							<CardTitle className="text-center">
								This Website Uses Cookies
							</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							We use cookies to enhance your browsing experience and analyze
							our traffic. By clicking “Accept” or continuing to use our
							site, you agree to our use of cookies.
						</CardContent>
						<CardFooter className="gap-4 justify-center">
							<Button
								onClick={() => {
									initConsentValues({
										analytics: true,
									});
								}}
							>
								Accept
							</Button>
							<Button
								onClick={() =>
									initConsentValues({
										analytics: false,
									})
								}
								variant="outline"
							>
								Deny
							</Button>
						</CardFooter>
					</Card>
				</motion.div>
			) : undefined}
		</AnimatePresence>
	);
};

export default CookieConsentBanner;
