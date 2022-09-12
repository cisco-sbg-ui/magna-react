import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import Icons from "./icons.json";
import "./AIcon.scss";

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

    const ariaLabel = label || `${children} icon`;

    return (
      <svg
        {...rest}
        ref={ref}
        {...(size && !isNaN(size) && {style: {width: size}})}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        aria-label={ariaLabel}>
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
