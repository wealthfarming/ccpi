module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    return config
  },
}
