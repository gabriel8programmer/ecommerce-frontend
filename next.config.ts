/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
		// Para Next.js 14 ou superior, use remotePatterns:
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
