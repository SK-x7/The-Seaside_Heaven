/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "kqweplfihuixthqzjjxq.supabase.co",
          port: '',
          pathname: '/storage/v1/object/public/Cabin-images/**',
        },
        {
          protocol: 'https',
          hostname: "lh3.googleusercontent.com",
          port: '',
          pathname: '/a/*',
        },
      ],
    },
  };

export default nextConfig;
