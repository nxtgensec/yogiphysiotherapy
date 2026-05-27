// @lovable.dev/vite-tanstack-config already includes the following, so do not add
// duplicate TanStack, React, Tailwind, tsconfig-paths, or local sandbox plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercelBuild = process.env.VERCEL === "1";

// Local and Cloudflare builds keep the existing Cloudflare adapter. Vercel builds
// switch to Nitro's Vercel preset so the deployment has Vercel-compatible output.
export default defineConfig({
  cloudflare: isVercelBuild ? false : undefined,
  plugins: isVercelBuild
    ? [nitro({ preset: "vercel", vercel: { functions: { runtime: "nodejs22.x" } } })]
    : [],
  tanstackStart: {
    server: { entry: "server" },
  },
});
