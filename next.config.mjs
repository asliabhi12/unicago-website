/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['assets.aceternity.com', 'aceternity.com','images.unsplash.com']
//     },
//   };


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
export default nextConfig;
