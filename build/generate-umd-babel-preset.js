const fs = require("fs");
const glob = require("glob");

const localDeclarations = [];
const declarations = [];
const files = glob.sync("./framework/components/**/index.js");

const getComponents = (data) => {
  const components = [];
  let matches = data.match(/([\{,][\s]?|  )([\w]+)/g);
  components.push(...matches);
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
      //path: `@cisco-sbg-ui/magna-react`
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
    //path: `@cisco-sbg-ui/magna-react/lib/components/${path[3]}`
    path: `@cisco-sbg-ui/magna-react`
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
