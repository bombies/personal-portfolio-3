import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
			{
				protocol: 'https',
				hostname: 'i.ajani.me',
			},
		],
	},
};

export default nextConfig;
