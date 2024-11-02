import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Allows SVG images, but be cautious as it may have security risks
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Use '**' instead of '*' for wildcard matching
      },
    ],
  },
  // Other config options can go here
};

export default nextConfig;
