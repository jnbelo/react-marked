module.exports = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    entry: "./src/Marked.tsx",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
        marked: "marked",
    },
    output: {
        library: "ReactMarked",
        libraryTarget: "umd",
    },
};
