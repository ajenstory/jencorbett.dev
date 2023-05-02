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
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: false,
      // Enabled by default.
      ssr: false,
      // Enabled by default.
      fileName: false,
      // Empty by default.
      topLevelImportPaths,
      // Defaults to ["index"].
      meaninglessFileNames: ["index", "styles"],
      // Enabled by default.
      cssProp,
      // Empty by default.
      namespace,
      // Not supported yet.
      minify,
      // Not supported yet.
      transpileTemplateLiterals,
      // Not supported yet.
      pure,
    },
    reactStrictMode: true,
  },
};

module.exports = withContentlayer(nextConfig);
