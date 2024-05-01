import React from "react";
import PropTypes from "prop-types";
import AIcon from "../AIcon";
import ATriggerTooltip from "../ATriggerTooltip";
import "./AKeyValue.scss";

const baseClass = "a-key-value";

const AKeyValue = ({
  label,
  children,
  tooltip,
  icon = "information",
  size,
  className: propsClassName,
  ...rest
}) => {
  let className = baseClass;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (size) {
    className += ` ${baseClass}--${size}`;
  }

  return (
    <div className={className} {...rest}>
      <div>
        {label}
        {tooltip && (
          <ATriggerTooltip content={tooltip} placement="top">
            <AIcon>{icon}</AIcon>
          </ATriggerTooltip>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

AKeyValue.propTypes = {
  /**
   * The `AKeyValue` component requires the data value as the only child element.
   */
  children: PropTypes.node,
  /**
   * Add a help tooltip to the key field
   */
  tooltip: PropTypes.node,
  /**
   * Set the icon of the help tooltip
   */
  icon: PropTypes.string,
  /**
   * Label for the key field
   */
  label: PropTypes.node,
  /**
   * Sets the font size
   */
  size: PropTypes.oneOf(["small"])
};

export default AKeyValue;
