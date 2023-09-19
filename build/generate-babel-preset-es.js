const fs = require("fs");
const glob = require("glob");

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

const allMembers = [];
files.forEach((x) => {
  const path = x.split("/");
  console.log(`Adding ${path[3]}`);
  const data = fs.readFileSync(x, {encoding: "utf8", flag: "r"});

  console.log(getComponents(data));
  const members = getComponents(data);

  if (members.includes("default")) {
    members.pop();
    members.push(path[3]);
  }

  allMembers.push(...members);
});

declarations.push({
  default: "Exports",
  members: allMembers,
  path: `@cisco-sbg-ui/magna-react`
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

fs.writeFile(
  "babel-preset-es.js",
  template(declarations),
  {flag: "w+"},
  (err) => {
    if (err) throw err;
    console.log("Babel preset successfully generated!");
  }
);
