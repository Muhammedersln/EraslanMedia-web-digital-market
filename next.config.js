/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
	  if (!isServer) {
		config.resolve.fallback = {
		  fs: false,
		  path: false,
		  child_process: false,
		  // Diğer modüller
		};
	  } else {
		// Webpack `externals` ayarını buraya ekleyin
		config.externals = {
		  'payload': 'commonjs payload',
		  'express': 'commonjs express'
		};
	  }
  
	  // picocolors modülü için ek ayar
	  config.module.rules.push({
		// test: /picocolors/,
		use: 'null-loader'
	  });
  
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
  
	// Critters eklentisini buraya ekleyin
	experimental: {
	  optimizeCss: true, // CSS optimizasyonunu etkinleştirir
	},
  };
  
  module.exports = nextConfig;
  