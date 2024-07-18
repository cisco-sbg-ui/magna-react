import React, {forwardRef} from "react";
import {kebabify} from "../../utils/helpers";
import Icons from "./icons.json";
import MagnaIcons from "./magnaIcons.js";
import {iconNameMap} from "./iconMap";
import "./AIcon.scss";
import {AIconProps} from "./types";

/**
 * For icons that should not be styled as "regular",
 * this will add a class that unsets the `stroke` css value.
 * Some of the Phosphor icons need fill rather than stroke,
 * this allows those to be styled appropriately.
 */
const ignoreStrokeReplace = [
  "info",
  "negative",
  "positive",
  "warning",
  "excellent",
  "severe-warning",
  "low-warning",
  "cisco",
  "dots-three",
  "dots-six",
  "dots-nine",
  "sort-up",
  "sort-down",
  "sort",
  "sort-empty",
  "last-page",
  "first-page",
  "malicious",
  "suspicious",
  "inactive",
  "disabled",
  "in-progress",
  "allow"
  // icons that start with "type_"
];

const AIcon = forwardRef<SVGSVGElement, AIconProps>(
  (
    {children, className: propsClassName, label, left, right, size, ...rest},
    ref
  ) => {
    let className = `a-icon`;

    if (size && typeof size === "number" && isNaN(size)) {
      className += ` a-icon--size-${size}`;
    }

    if (left) {
      className += ` a-icon--left`;
    }

    if (right) {
      className += ` a-icon--right`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    className += ` a-icon--${children}`;

    const ariaLabel = label || `${children} icon`,
      componentProps = {
        style: {},
        ...rest,
        ref,
        className,
        "aria-label": ariaLabel
      };

    if (!componentProps.style) {
      componentProps.style = {};
    }

    if (size && typeof size === "number" && !isNaN(size)) {
      componentProps.style.width = size;
    }

    let magneticIconDef;

    if (!children || typeof children !== "string") {
      return null;
    }

    if ((MagnaIcons as any)[children]) {
      // Check if it's in magna icons

      magneticIconDef = (MagnaIcons as any)[children];
    } else if (iconNameMap[children]) {
      // check if we can map an atomic icon name to a magna icon
      magneticIconDef = (MagnaIcons as any)[iconNameMap[children]];
    } else {
      const kebabed = kebabify(children);

      magneticIconDef = (MagnaIcons as any)[kebabed];

      if (magneticIconDef) {
        componentProps.className += ` a-icon--${kebabed}`;
        componentProps["aria-label"] += ` ${kebabed}`;
      }
    }

    if (magneticIconDef) {
      const {props: iconProps, xml} = magneticIconDef;

      if (
        ignoreStrokeReplace.includes(children) ||
        children.startsWith("type_")
      ) {
        componentProps.style.stroke = "none";
      }

      return (
        <svg {...iconProps} {...componentProps}>
          {xml}
        </svg>
      );
    }

    return (
      <svg {...componentProps} viewBox="0 0 16 16">
        <path d={(Icons as any)[children]} />
      </svg>
    );
  }
);

AIcon.displayName = "AIcon";

export default AIcon;
