const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // Use `MDXProvider` in app
    // providerImportSource: "@mdx-js/react",
  },
});

// /** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "mjs"],
  // Other Next.js config below
  reactStrictMode: true,
  appDir: false,
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
