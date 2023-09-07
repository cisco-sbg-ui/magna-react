import fs, {readFileSync} from "fs";
import path from "path";
const pkg = JSON.parse(readFileSync("./package.json"));

const cssPath = path.resolve("dist/index.es.css"),
  esPath = path.resolve("dist/index.es.js"),
  css = fs.readFileSync(cssPath, {encoding: "utf-8"}),
  id = `magna-react-css-${pkg.version}`;

const inject = `\n\n
if (document && !document.getElementById("${id}")) {
const style = document.createElementNS("http://www.w3.org/1999/xhtml", "style");
style.id = "${id}";
style.innerHTML = \`${css}\`;

document.getElementsByTagName("head")[0].appendChild(style);
}
  `;

fs.appendFileSync(esPath, inject);
