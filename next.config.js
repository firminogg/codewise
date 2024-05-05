/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doity.com.br",
        port: "",
        pathname: "/media/doity/parceiros/**",
      },
    ],
  },
};
