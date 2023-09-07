import {babel} from "@rollup/plugin-babel";
import cssnano from "cssnano";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import {readFileSync} from "fs";

const pkg = JSON.parse(readFileSync("./package.json"));

const plugins = [
  json(),
  nodeResolve(),
  postcss({
    plugins: [
      cssnano({
        preset: "default"
      })
    ],
    extract: true
  }),
  babel({
    babelHelpers: "runtime",
    exclude: ["node_modules/**"]
  })
];

const config = {
  input: "framework/index.js",
  external: (id) => {
    if (/node_modules/.test(id)) {
      return true;
    }
    return false;
  },
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins
};

export default config;
