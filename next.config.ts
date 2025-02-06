import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/home', // Asegúrate de que no redirige mal
      },
    ];
  },
};

export default nextConfig;
