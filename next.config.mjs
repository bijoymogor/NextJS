/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "www.images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
