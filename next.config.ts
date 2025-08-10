import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Disable webpack cache to avoid large files
    webpackBuildWorker: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache in production
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
