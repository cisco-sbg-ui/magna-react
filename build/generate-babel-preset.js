const fs = require("fs");
const glob = require("glob");

const localDeclarations = [];
const declarations = [];
const files = [
  ...glob.sync("./framework/components/**/index.js"),
  ...glob.sync("./framework/components/**/index.ts")
];

const getComponents = (data) => {
  const components = [];
  // eslint-disable-next-line no-regex-spaces
  let matches = data.match(/([{,][\s]?|  )([\w]+)/g);
  if (matches) {
    components.push(...matches);
  }
  return components.map((x) => {
    return x.replace("  ", "").replace(", ", "").replace("{", "");
  });
};

files.forEach((x) => {
  const path = x.split("/");
  console.log(`Adding ${path[3]}`);
  const data = fs.readFileSync(x, {encoding: "utf8", flag: "r"});

  if (data.includes("export {default} from")) {
    declarations.push({
      default: path[3],
      path: `@cisco-sbg-ui/magna-react/lib/components/${path[3]}`
    });
    localDeclarations.push({
      default: path[3],
      path: `../lib/components/${path[3]}`
    });
    return;
  }

  declarations.push({
    default: path[3] + "Exports",
    members: getComponents(data),
    path: `@cisco-sbg-ui/magna-react/lib/components/${path[3]}`
  });
  localDeclarations.push({
    default: path[3] + "Exports",
    members: getComponents(data),
    path: `../lib/components/${path[3]}`
  });
});

const template = (value) => `module.exports = function () {
  return {
    plugins: [
      [
        require("babel-plugin-auto-import"),
        {
          declarations: ${JSON.stringify(value)}
        }
      ]
    ]
  };
};
`;

fs.writeFile("babel-preset.js", template(declarations), {flag: "w+"}, (err) => {
  if (err) throw err;
  console.log("Babel preset successfully generated!");
});

fs.writeFile(
  "babel-preset-local.js",
  template(localDeclarations),
  {flag: "w+"},
  (err) => {
    if (err) throw err;
    console.log("Babel preset (local) successfully generated!");
  }
);
