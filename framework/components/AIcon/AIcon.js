import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import {kebabify} from "../../utils/helpers";
import Icons from "./icons.json";
import MagnaIcons from "./magnaIcons.js";
import {iconNameMap} from "./atomicMap.js";
import "./AIcon.scss";

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
  "suspicious"
  // icons that start with "type_"
];

const AIcon = forwardRef(
  (
    {children, className: propsClassName, label, left, right, size, ...rest},
    ref
  ) => {
    let className = `a-icon`;

    if (size && isNaN(size)) {
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

    if (size && !isNaN(size)) {
      componentProps.style.width = size;
    }

    let magneticIconDef;

    if (MagnaIcons[children]) {
      // Check if it's in magna icons

      magneticIconDef = MagnaIcons[children];
    } else if (iconNameMap[children]) {
      // check if we can map an atomic icon name to a magna icon
      magneticIconDef = MagnaIcons[iconNameMap[children]];
    } else {
      const kebabed = kebabify(children);

      magneticIconDef = MagnaIcons[kebabed];

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

    // Fallback to atomic icon for safety
    componentProps.className += " a-icon--atomic";
    return (
      <svg {...componentProps} viewBox="0 0 16 16">
        <path d={Icons[children]} />
      </svg>
    );
  }
);

AIcon.propTypes = {
  /**
   * The `AIcon` component requires the icon name as the only child element.
   */
  children: PropTypes.string.isRequired,
  /**
   * Overrides the default `aria-label`, "[icon_name] icon".
   */
  label: PropTypes.string,
  /**
   * Adjusts margins if on the left side of text.
   */
  left: PropTypes.bool,
  /**
   * Adjusts margins if on the right side of text.
   */
  right: PropTypes.bool,
  /**
   * Sets a custom icon width.
   */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["small", "medium", "large"])
  ])
};

AIcon.displayName = "AIcon";

export default AIcon;
