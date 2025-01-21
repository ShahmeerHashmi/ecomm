/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'next-ecommerce-template-4.vercel.app/api/product'], // Added Sanity CDN
  },
};

export default nextConfig;