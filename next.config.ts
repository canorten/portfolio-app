import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 1. Statik HTML çıktısı almasını sağlar
  images: {
    unoptimized: true, // 2. GitHub Pages'de resim optimizasyon sunucusu olmadığı için bunu kapatmalıyız
  },
  basePath: '/portfolio-app',
};

export default nextConfig;
