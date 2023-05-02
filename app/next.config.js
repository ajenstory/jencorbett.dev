const { withContentlayer } = require("next-contentlayer");

// /** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "mjs"],
  // Other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  generateBuildId: async () => {
    // get latest build hash
    return "latest-build-hash";
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
