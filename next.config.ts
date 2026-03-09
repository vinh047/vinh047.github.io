import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Báo cho Next.js biết để xuất ra file HTML/CSS tĩnh
  images: {
    unoptimized: true,
  },
};

export default nextConfig;