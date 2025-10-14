import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  // Enable proper hot reloading in development
  webpack: (config, { dev }) => {
    if (dev) {
      // Enable webpack's hot module replacement for proper development experience
      config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
  eslint: {
    // Don't ignore ESLint errors during builds
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
