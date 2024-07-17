/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com","i.ibb.co","lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
 
};

export default nextConfig;
