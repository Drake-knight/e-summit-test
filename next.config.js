const withPWA = require('next-pwa')({
	dest: 'public',
	swSrc: 'service-worker.js'
})


/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPWA({
	...nextConfig
})
