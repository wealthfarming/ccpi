/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: process.env.BASE_PATH || '',  // Use env var for dynamic basePath
    assetPrefix: process.env.BASE_PATH || '',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;