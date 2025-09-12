import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
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
  // Ensure sitemap.xml is included in static export
  async generateBuildId() {
    return 'wplace-pixel-tool-build';
  },
};

export default nextConfig;
