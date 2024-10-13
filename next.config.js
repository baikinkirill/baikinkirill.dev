/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    config.module.rules.push({
      test: /\.(jpe?g|png)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });

    return config;
  }
};

module.exports = nextConfig;
