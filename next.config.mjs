/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/film-site",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
