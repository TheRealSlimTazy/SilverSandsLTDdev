/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true // optional if you're using forms later
    },
    dynamic: 'force-dynamic'
};

module.exports = nextConfig;
