/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Updated to the IP address from your terminal error
  allowedDevOrigins: ['192.168.1.9'],
  // Added to fix image loading issues on Vercel
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;