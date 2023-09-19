import {babel} from "@rollup/plugin-babel";
import cssnano from "cssnano";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import {readFileSync} from "fs";

const pkg = JSON.parse(readFileSync("./package.json"));

const inject = (cssVariableName, fileId) => {
  const split = fileId.split("/");
  const componentName = split[split.length - 1].split(".")[0];
  const id = `@cisco-sbg-ui/magna-react--${componentName}`;

  const ret = `
    if (document && !document.getElementById('${id}')) {
      const style = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "style"
      );
      style.id = '${id}';
      style.innerHTML = ${cssVariableName};
      document.getElementsByTagName("head")[0].appendChild(style);
    }`;

  return ret;
};

const plugins = [
  json(),
  nodeResolve(),
  postcss({
    plugins: [
      cssnano({
        preset: "default"
      })
    ],
    inject
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
