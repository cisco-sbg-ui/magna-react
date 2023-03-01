import fs from "fs";
import path from "path";
import {XMLParser, XMLBuilder} from "fast-xml-parser";
import isEqual from "lodash-es/isEqual.js";

const xmlOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  processEntities: false,
  format: false
};
const parser = new XMLParser(xmlOptions);
const builder = new XMLBuilder(xmlOptions);

const sprites = ({prependPrefix = "", svgDir, outputPath}) => {
  const processedSprites = process(prependPrefix, svgDir);

  const outputContent = `import React from "react";

  const MagnaIcons = {
    ${processedSprites}
  };

  export default MagnaIcons`;

  fs.writeFileSync(outputPath, outputContent);
};

const mapSprites = () => {
  let iconVariables = "";
  for (let [k, v] of Object.entries(parsedSprites)) {
    const xmlContent = builder.build(v.svg),
      key = k.charAt(0).toLowerCase() + k.slice(1),
      attrMap = {};

    Object.keys(v.svg)
      .filter((k) => k.startsWith("@_"))
      .forEach((k) => {
        attrMap[k.replace("@_", "")] = v.svg[k];
      });

    let outputData = `"${key}": {
      xml: <>${xmlContent}</>,
      props: ${JSON.stringify(attrMap)}},`;

    outputData = outputData
      .replaceAll("fill-rule=", "fillRule=")
      .replaceAll("clip-rule=", "clipRule=")
      .replaceAll("clip-path=", "clipPath=")
      .replaceAll("stroke-width=", "strokeWidth=")
      .replaceAll('fill="#889099"', "")
      .replaceAll(`stroke="#000"`, "")
      .replaceAll("class=", "className=")
      .replaceAll("stroke-linejoin=", "strokeLinejoin=")
      .replaceAll("stroke-linecap=", "strokeLinecap=")
      .replaceAll("stroke-miterlimit=", "strokeMiterlimit=")
      .replaceAll("xmlns:xlink=", "xmlnsXlink=");

    iconVariables += outputData;
  }

  return iconVariables;
};

const process = (prependPrefix, dir) => {
  readDir(dir, 0, {prependPrefix});

  return mapSprites();
};

const parsedSprites = {};
const readDir = (dir, level = 0, options = {}) => {
  const files = fs.readdirSync(dir),
    {prependPrefix} = options;

  for (let file of files) {
    const fullPath = `${dir}/${file}`,
      isDir = fs.lstatSync(fullPath).isDirectory();

    if (isDir) {
      readDir(fullPath, level + 1, options);
    } else if (file.endsWith(".svg")) {
      const fileShortname = file.replace(".svg", ""),
        resolvedPath = path.resolve(fullPath),
        data = fs.readFileSync(resolvedPath, {encoding: "utf-8"});

      let xml = parser.parse(data);

      delete xml["?xml"];

      if (!xml.svg) {
        if (xml.symbol) {
          xml.svg = xml.symbol;
          delete xml.symbol;
        }
      }

      let mappedId = fileShortname
        .trim()
        .replace("=", "_")
        .replace(", ", "")
        .replaceAll(" ", "_")
        .replace(/Selected.*/g, "");

      if (prependPrefix) {
        mappedId = `${prependPrefix}-${mappedId}`;
      }

      sanitizeSvg(xml.svg, {parentId: mappedId});

      if (xml.svg["@_viewBox"]) {
        delete xml.svg["@_height"];
        delete xml.svg["@_width"];
      } else if (xml.svg["@_height"] && xml.svg["@_width"]) {
        xml.svg[
          "@_viewBox"
        ] = `0 0 ${xml.svg["@_width"]} ${xml.svg["@_height"]}`;
        delete xml.svg["@_height"];
        delete xml.svg["@_width"];
      }

      parsedSprites[mappedId] = xml;
    }
  }
};

// Prepends all sub-ids with the svg parent id
// and updates references
const sanitizeSvg = (element, options = {}, trackedIds = {}) => {
  const {parentId} = options;

  if (element["@_id"]) {
    const mappedId = `${parentId}-nestedId-${element["@_id"]}`;

    // Track which ids have been remapped
    trackedIds[element["@_id"]] = {
      id: element["@_id"],
      mappedId
    };

    element["@_id"] = mappedId;
  }

  Object.keys(element).forEach((key) => {
    const child = element[key],
      toCheck = [];

    if (typeof child === "string") {
      Object.keys(trackedIds).forEach((id) => {
        const toReplace = `#${id}`;
        // Substitute any references to mapped ids
        if (child.includes(toReplace)) {
          element[key] = element[key].replace(
            toReplace,
            `#${trackedIds[id].mappedId}`
          );
        }
      });
    } else if (typeof child === "object") {
      if (
        isEqual(child, {
          "@_width": "256",
          "@_height": "256",
          "@_fill": "none"
        })
      ) {
        delete element[key];
      } else {
        toCheck.push(child);
      }
    }

    toCheck.forEach((check) => {
      sanitizeSvg(check, options, trackedIds);
    });
  });
};

sprites({
  svgDir: "svg",
  outputPath: "framework/components/AIcon/magnaIcons.js"
});
