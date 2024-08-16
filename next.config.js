/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
	  if (!isServer) {
		config.resolve.fallback = {
		  fs: false,
		  path: false,
		  child_process: false
		};
	  } else {
		// Webpack `externals` ayarını buraya ekleyin
		config.externals = {
		  'payload': 'commonjs payload',
		  'express': 'commonjs express'
		};
	  }
  
	  return config;
	},
  
	images: {
	  remotePatterns: [
		{
		  protocol: "http",
		  hostname: "localhost",
		},
	  ],
	},
  };
  
  module.exports = nextConfig;
  