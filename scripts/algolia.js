require("dotenv").config();
const algoliasearch = require("algoliasearch");
const matter = require("gray-matter");
const fs = require("fs");
const glob = require("glob");
const reactDocs = require("react-docgen");
const removeMd = require("remove-markdown");

const updateAlgolia = async () => {
  const propsInfo = glob
    .sync("./framework/**/+(A)!(*.spec|*Context).js")
    .map((x) => {
      const componentSource = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
      return reactDocs.parse(componentSource);
    });

  const algoliaObjects = glob.sync("./framework/**/*.mdx").map((x) => {
    const file = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
    const {content, data} = matter(file);

    let components = null;
    let props = null;
    if (data.components) {
      components = data.components.split(",").map((x) => x.trim());
      props = components
        .map((x) => propsInfo.find((y) => y.displayName === x))
        .filter(Boolean);
    }

    return {
      objectID: data.route,
      route: data.route,
      name: data.name,
      components,
      excerpt: (
        removeMd(
          content
            .replace(/<Playground(.+?)\r?\n`}\r?\n\/>/gs, "")
            .replace(/```.+?```/gs, "")
        ).replace(/\n/g, " ") +
          props
            ?.map(
              (x) =>
                (x.props &&
                  Object.keys(x.props)
                    ?.map((y) => `${y} - ${x.props[y].description}`)
                    .join(" ")) ||
                ""
            )
            .filter(Boolean)
            .join(" ") || ""
      ).substr(0, 5000)
    };
  });

  try {
    const {ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, ALGOLIA_INDEX_NAME} = process.env;
    const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
    const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME);
    const response = await algoliaIndex.replaceAllObjects(algoliaObjects);
    console.log(`Algolia updated: ${response.objectIDs.length} objects.`);
  } catch (err) {
    console.log(err);
  }
};

updateAlgolia();
