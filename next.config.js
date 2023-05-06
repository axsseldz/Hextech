/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "api.dicebear.com", "nextjs.org", "w7.pngwing.com", "static1.srcdn.com"]
  },
  env: {
    API_KEY: process.env.API_KEY,
    REDDIT_SECRET: process.env.REDDIT_SECRET,
    REDDIT_ID: process.env.REDDIT_ID,
  },
}

module.exports = nextConfig
