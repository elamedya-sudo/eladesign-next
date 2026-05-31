/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.eladesign.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eladesign.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;