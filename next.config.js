/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * by default, this is set to true.
   * from react18, reactStrictMode causes double rendering in development when true
   * this sets the value to false in dev env, and true in any other env
   */
  reactStrictMode: process.env.NODE_ENV !== "development",
};

module.exports = nextConfig;
