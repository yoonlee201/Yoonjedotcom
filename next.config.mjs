/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/' : '',
    images: {
        unoptimized: true,
    },
    webpack: config => {
        config.module.rules.push(
            {
                test: /\.(glb|gltf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static/models/',
                        publicPath: '/_next/static/models/',
                    },
                },
            },
            {
                test: /\.(jpg|JPG|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static/images/',
                        publicPath: '/Yoonjedotcom/_next/static/images/',
                    },
                },
            },
            {
                test: /\.pdf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static/files/',
                        publicPath: '/_next/static/files/',
                    },
                },
            },
            {
                test: /\.(svg)$/,
                include: /devicons/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static/devicons/',
                        publicPath: '/_next/static/devicons/',
                    },
                },
            }
        );
        return config;
    },
};

export default nextConfig;
