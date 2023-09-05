const path = require("path");

module.exports = (env, argv) => {
  const config = {
    mode: "production",
    entry: "./framework/index.js",
    devtool: "nosources-source-map",
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            // Use the chain sass-loader -> css-loader -> style-loader
            // But use MiniCssExtractPlugin on prod, so we get a file.
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                ["@babel/preset-env", {/*targets: "defaults",*/ modules: false}]
              ]
            }
          }
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".js"]
    },
    experiments: {outputModule: true},
    output: {
      filename: `index.module.js`,
      path: path.resolve(__dirname, "./dist"),
      library: {
        type: "module"
      }
    },
    plugins: [
      // ... your existing plugins ...
    ],
    optimization: {
      // ... your existing optimization settings ...
    }
  };

  // ... your existing mode-based configuration ...

  return config;
};
