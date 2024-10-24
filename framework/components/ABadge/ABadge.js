import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import {isStockColor, isValidColor} from "../../utils/helpers";
import AIcon from "../AIcon";
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
      medium = true,
      large,
      alertType,
      dot,
      counter,
      level = "error",
      ...rest
    },
    ref
  ) => {
    let className = "a-badge";

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

    if (counter) {
      badgeProps.className += ` a-badge__badge--counter`;
    } else if (alertType) {
      badgeProps.className += ` a-badge__badge--alert-${alertType}`;
    } else if (level) {
      badgeProps.className += ` a-badge__badge--${level}`;
    } else if (color) {
      if (isStockColor(color)) {
        badgeProps.className += ` ${color}`;
      } else {
        badgeProps.style = {
          color
        };
      }
    }

    if (dot) {
      badgeProps.className += " a-badge__badge--dot";
    }

    if (small) {
      badgeProps.className += " a-badge__badge--small";
    } else if (large) {
      badgeProps.className += " a-badge__badge--large";
    } else if (medium) {
      badgeProps.className += " a-badge__badge--medium";
    }

    const badgeContent =
      display && alertType ? (
        <>
          <AIcon>{alertType}</AIcon>
          {content}
        </>
      ) : (
        content
      );
    return (
      <div {...rest} ref={ref} className={className}>
        {display && (
          <div className="a-badge__wrapper">
            <span {...badgeProps}>{badgeContent}</span>
          </div>
        )}
        {children}
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
  label: PropTypes.string,
  /**
   * Set the severity level, ignores the color prop
   */
  level: PropTypes.oneOf(["error, info, success"]),
  medium: PropTypes.bool,
  dot: PropTypes.bool,
  alertType: "string"
};

ABadge.displayName = "ABadge";

export default ABadge;
