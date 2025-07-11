import NextBundleAnalyzer from "@next/bundle-analyzer";
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
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "*",
      //   port: "",
      // },
    ],
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

export default withNextIntl(withBundleAnalyzer(nextConfig));
