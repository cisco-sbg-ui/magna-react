import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import {isStockColor, isValidColor} from "../../utils/helpers";
import "./ABadge.scss";

const ABadge = forwardRef(
  (
    {
      children,
      className: propsClassName,
      color,
      content,
      display = true,
      label = "badge",
      small,
      large,
      ...rest
    },
    ref
  ) => {
    let className = `a-badge`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const badgeProps = {
      "aria-atomic": true,
      "aria-label": label,
      "aria-live": "polite",
      role: "status",
      className: "a-badge__badge"
    };

    if (isStockColor(color)) {
      badgeProps.className += ` ${color}`;
    } else {
      badgeProps.style = {
        color
      };
    }

    if (!content) {
      badgeProps.className += " a-badge__badge--no-content";
    }

    if (small) {
      badgeProps.className += " a-badge__badge--small";
    } else if (large) {
      badgeProps.className += " a-badge__badge--large";
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
        {display && (
          <span className="a-badge__wrapper">
            <span {...badgeProps}>{content}</span>
          </span>
        )}
      </div>
    );
  }
);

ABadge.propTypes = {
  /**
   * Specify the checkbox color. Accepts any stock color or CSS color value.
   */
  color: isValidColor,
  /**
   * The badge content.
   */
  content: PropTypes.node,
  /**
   * Toggles whether the badge displays.
   */
  display: PropTypes.bool,
  /**
   * Use to override the default `aria-label`.
   */
  label: PropTypes.string
};

ABadge.displayName = "ABadge";

export default ABadge;
