// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// import { withPayload } from '@payloadcms/next/withPayload'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your Next.js config here
//   experimental: {
//     reactCompiler: false,
//   },
// }

// // Make sure you wrap your `nextConfig`
// // with the `withPayload` plugin
// export default withPayload(nextConfig) 

import path from 'path';

const nextConfig = {
  webpack: (config) => {
    // Add the @payload-config alias
    config.resolve.alias['@payload-config'] = path.resolve(
      process.cwd(),
      'payload.config.js'
    );
    return config;
  },
};

export default nextConfig;
