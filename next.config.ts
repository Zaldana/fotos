import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimization of local images in the gallery folders
    remotePatterns: [],
    // Disable image optimization restrictions for local files
    unoptimized: false,
    // Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Set image sizes for different screen sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
