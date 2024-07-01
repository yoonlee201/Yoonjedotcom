/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/_next/static/files',
                        outputPath: 'static/files',
                    },
                },
            ],
        });
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                    name: '[name].[hash].[ext]',
                },
            },
        });
        return config;
    },
};

export default nextConfig;
