/** @type {import('next').NextConfig} */
const nextConfig = {
	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.resolve.fallback = { 
    //             fs: false, 
    //             path: false, 
    //             child_process: false  // child_process modülünü false olarak ekleyin
    //         };
	// 	}

	// 	return config;
	// },
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			// {
			// 	protocol: "https",
			// 	// hostname: "digitalhippo-production.up.railway.app",
			// },
		],
	},
};

module.exports = nextConfig;
