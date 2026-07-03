/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing settings
  devIndicators: {
    appIsrStatus: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // The fix for image loading:
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;