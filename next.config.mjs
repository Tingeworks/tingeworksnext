/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.tingeworks.com",
      },
    ],
  },
};

export default nextConfig;
