/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MYSQL_CONNECT: process.env.MYSQL_CONNECT,
  }
}

module.exports = nextConfig
