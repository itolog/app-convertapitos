import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
				port: "",
			},
		],
	},
	crossOrigin: "anonymous",
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					// other headers omitted for brevity...
					{ key: "Cross-Origin-Opener-Policy", value: "same-origin" },
				],
			},
		];
	},
};

export default withNextIntl(nextConfig);
