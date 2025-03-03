import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Fira_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '../components/nav/navbar';
import './globals.css';

const sfProDisplay = localFont({
	src: [
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Ultralight.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-UltralightItalic.otf',
			weight: '100',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Light.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-LightItalic.otf',
			weight: '200',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Thin.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-ThinItalic.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-RegularItalic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-MediumItalic.otf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Semibold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-SemiboldItalic.otf',
			weight: '600',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-BoldItalic.otf',
			weight: '700',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Heavy.otf',
			weight: '800',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-HeavyItalic.otf',
			weight: '800',
			style: 'italic',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-Black.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/sf-pro-display/SF-Pro-Display-BlackItalic.otf',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-sf-pro-display',
});

const firaMono = Fira_Mono({
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
			<html
				lang="en"
				className={`${sfProDisplay.variable} ${firaMono.variable}`}
			>
				<body className="antialiased">
					<Navbar />
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
}
