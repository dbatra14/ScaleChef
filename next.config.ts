import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: "C:/Users/jhash/ScaleChef",
  },
  outputFileTracingRoot: "C:/Users/jhash/ScaleChef",
};

export default nextConfig;
