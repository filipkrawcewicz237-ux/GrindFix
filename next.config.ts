import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old .html URLs to new clean URLs
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true, // 301 redirect - tells Google to update index
      },
      {
        source: "/corporate.html",
        destination: "/", // Or appropriate page if you know what corporate.html was
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache HTML pages (blog posts, service pages) for 1 day
      {
        source: "/(blog|serwis|abonament|mobilny|przeglad|naprawa|cennik|budowa|amortyzator|wydarzenie|dzien)/(:path)*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  compress: true,
};

export default nextConfig;
