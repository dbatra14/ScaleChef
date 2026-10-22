import type { NextConfig } from "next";

/**
 * `next.config.ts` is transpiled to CommonJS and loaded with `require`, so
 * `__dirname` is normally available. The `process.cwd()` fallback keeps the
 * config working if the file is ever loaded through Node's native ESM
 * TypeScript resolver instead.
 */
const projectRoot = typeof __dirname !== "undefined" ? __dirname : process.cwd();

/**
 * Optional path prefix, for the rare case of deploying the app under a
 * subdirectory (for example `https://example.com/site/`). Leave it unset for
 * a normal root-domain deployment.
 *
 * Set it as `NEXT_PUBLIC_BASE_PATH=/site/` (note the trailing slash).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * Pin the project root.
   *
   * Without this, Next.js infers the workspace root by walking up the tree
   * looking for a lockfile. On a machine with more than one lockfile (or when
   * the app is unpacked into a subfolder on shared hosting) it picks the
   * wrong one and every asset path shifts. Pinning it keeps local builds and
   * the Hostinger build resolving files from the same place.
   */
  turbopack: {
    root: projectRoot,
  },

  /**
   * Next.js 16 no longer lints during `next build` and removed the
   * `eslint.ignoreDuringBuilds` option, so it is deliberately not set here.
   * Linting still runs through `npm run lint`.
   */
  typescript: {
    ignoreBuildErrors: true,
  },

  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
