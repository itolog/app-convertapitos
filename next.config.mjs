import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "*",
      //   port: "",
      // },
    ],
  },
};

export default withNextIntl(nextConfig);
