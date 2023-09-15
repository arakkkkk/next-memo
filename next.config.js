/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://todo_go-rest:8080/api/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
