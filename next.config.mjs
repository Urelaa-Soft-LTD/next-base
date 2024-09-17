/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.urelaa.com",
				pathname: "/files/**",
			},
		],
	},
};

export default nextConfig;
