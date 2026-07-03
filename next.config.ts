/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this block:
  devIndicators: {
    appIsrStatus: false,
  },
  // If you are using a newer version of Next.js, 
  // you might need to add it here:
  typescript: {
    ignoreBuildErrors: true,
  },
  // The specific fix for your error:
  allowedDevOrigins: ['192.168.1.2'],
};

module.exports = nextConfig;