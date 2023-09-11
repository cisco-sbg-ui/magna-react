const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./framework/index.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../lib/styles/magna-react.css" // could also output in dist/magna-react.css if we can troubleshoot es bundle.js
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
        },
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `bundle.js`,
    libraryTarget: "umd"
  },
  // Note* Cant seem to get es modules to work in IM for "dist/bundle.js",
  // So left lib entry for module for now while troubleshooting
  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  //   filename: "bundle.js",
  //   library: {
  //     type: "module"
  //   }
  // },
  // experiments: {
  //   outputModule: true
  // },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
