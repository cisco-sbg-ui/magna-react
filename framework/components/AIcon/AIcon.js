import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import Icons from "./icons.json";
import MagnaIcons from "./magnaIcons.js";
import {iconNameMap} from "./atomicMap";
import "./AIcon.scss";

const ignoreStrokeReplace = [
  "info",
  "information",
  "negative",
  "positive",
  "warning",
  "cisco",
  "dots-three",
  "dots-six"
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
        ...rest,
        ref,
        className,
        style: {},
        "aria-label": ariaLabel
      };

    if (size && !isNaN(size)) {
      componentProps.style.width = size;
    }

    let iconDef;

    if (MagnaIcons[children]) {
      // Check if it's in magna icons

      iconDef = MagnaIcons[children];
    } else if (iconNameMap[children]) {
      // check if we can map an atomic icon name to a magna icon
      iconDef = MagnaIcons[iconNameMap[children]];
    }

    if (ignoreStrokeReplace.includes(children)) {
      componentProps.style.stroke = "none";
    }

    if (iconDef) {
      const {props: iconProps, xml} = iconDef;

      return (
        <svg {...iconProps} {...componentProps}>
          {xml}
        </svg>
      );
    }

    // Fallback to atomic icon for safety
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
