import React from "react";

import {AList, AListItem} from "../framework";

const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const colorIsLight = (r, g, b) => {
  // Counting the perceptive luminance
  // human eye favors green color...
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return a < 0.5;
};

const ColorSwatch = ({title, colors}) => {
  return (
    <AList className="mx-3 my-3" style={{width: 200}}>
      {Object.keys(colors).map((x, index) => {
        const rgb = hexToRgb(colors[x]);
        return (
          <AListItem
            key={index}
            className={
              colorIsLight(rgb.r, rgb.g, rgb.b) ? "black--text" : "white--text"
            }
            style={{backgroundColor: colors[x]}}>
            {x}
          </AListItem>
        );
      })}
      <AListItem>{title}</AListItem>
    </AList>
  );
};

ColorSwatch.displayName = "ColorSwatch";

export default ColorSwatch;
