/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true // ✅ Correct usage
    }
};

module.exports = nextConfig;
