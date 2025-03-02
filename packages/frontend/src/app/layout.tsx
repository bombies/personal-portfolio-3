import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Fira_Mono, Inter } from 'next/font/google';

import Navbar from '../components/nav/navbar';
import './globals.scss';

export const inter = Inter({
	variable: '--font-inter',
	display: 'swap',
	subsets: ['latin'],
});

export const firaMono = Fira_Mono({
	variable: '--font-fira-mono',
	display: 'swap',
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Ajani Green',
	description: 'Full-Stack Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en">
				<body
					className={`${inter.variable} ${firaMono.variable} antialiased`}
				>
					<Navbar />
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
}
