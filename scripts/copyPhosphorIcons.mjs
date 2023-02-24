import fs from "fs";
import os from "os";
import path from "path";
import icons from "../framework/components/AIcon/atomicMap.js";

/**
 * This script will copy phospohor icons from downloads into the svg dir.
 * Afterwards run the buildIcons script to generate the icons file for `AIcon`.
 *
 * To use this script:
 *
 * Download the icon zip file from https://phosphoricons.com/ and extract it to
 * `~/Downloads`
 *
 * Run `npm run copyPhosphorIcons`
 */

const phosphorPath = `${os.homedir()}/Downloads/phosphor-icons/SVGs/Regular`;
const outputBase = "./svg";

const {iconNameMap} = icons;

const generatedListForPhosphor = Object.entries(iconNameMap).map(
  ([atomicKey, phosphorKey]) => phosphorKey || atomicKey
);

const copyIconFiles = () => {
  generatedListForPhosphor.forEach((key) => {
    if (key === "info") {
      return;
    }

    try {
      const iconPath = path.resolve(`${phosphorPath}/${key}.svg`);

      const iconData = fs.readFileSync(iconPath, {encoding: "utf-8"}),
        outputPath = path.resolve(`${outputBase}/${key}.svg`);

      fs.writeFileSync(outputPath, iconData);
    } catch {
      console.warn("Unable to find phopshor icon file for", key);
    }
  });
};

copyIconFiles();
