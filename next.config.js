const withPWA = require('next-pwa')({
	dest: 'public',
	swSrc: 'service-worker.js',
	sw: 'firebase-messaging-sw.js'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experiments: {
		topLevelAwait: true,
	},
};

module.exports = withPWA(nextConfig);
