import fs from "fs";
import os from "os";
import path from "path";
import {iconNameMap} from "../framework/components/AIcon/atomicMap.mjs";

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
 *
 *
 * This uses the Regular icon set from Phosphor. If changing to fill,
 * change Regular -> Fill in `phosphorPath`, and add `-fill` to
 * `iconPath`.
 */

const phosphorPath = `${os.homedir()}/Downloads/phosphor-icons/SVGs/Regular`;
const outputBase = "./svg";

const generatedListForPhosphor = Object.entries(iconNameMap).map(
  ([atomicKey, phosphorKey]) => phosphorKey || atomicKey
);

const copyIconFiles = () => {
  generatedListForPhosphor.forEach((key) => {
    let outputName = key;
    if (key === "info") {
      outputName = "information";
    }

    try {
      const iconPath = path.resolve(`${phosphorPath}/${key}.svg`);

      const iconData = fs.readFileSync(iconPath, {encoding: "utf-8"}),
        outputPath = path.resolve(`${outputBase}/${outputName}.svg`);

      fs.writeFileSync(outputPath, iconData);
    } catch {
      console.warn("Unable to find phopshor icon file for", key);
    }
  });
};

copyIconFiles();
