import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@neonflower/sheet-core",
    "@neonflower/sheet-react",
    "@betteroffice/fonts",
    "@betteroffice/fonts-cjk",
    "@betteroffice/fonts-intl",
    "@betteroffice/fonts-latin",
    "@betteroffice/vsdx",
    "@betteroffice/vsdx-react",
  ],
};

export default nextConfig;

initOpenNextCloudflareForDev();
