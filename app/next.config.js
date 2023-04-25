import { withContentlayer } from "next-contentlayer";

// /** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "mjs"],
  // Other Next.js config below
  reactStrictMode: true,
  appDir: false,
};

module.exports = withContentlayer(nextConfig);
