/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true, // Reduz processamento de CSS
  },
};

export default nextConfig;
