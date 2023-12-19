const withPWA = require('next-pwa')({
	dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experiments: {
		topLevelAwait: true,
	},
	webpack: (config, { isServer }) => {
		// Add asset handling rules for MP3 files
		config.module.rules.push({
			test: /\.(mp3)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: '/_next/static/assets/',
						outputPath: 'static/assets/',
						emitFile: !isServer,
					},
				},
			],
		});

		return config;
	},
};

module.exports = withPWA(nextConfig);
