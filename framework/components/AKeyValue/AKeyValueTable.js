import React from "react";
import PropTypes from "prop-types";

const baseClass = "a-key-value-table";

const AKeyValueTable = ({
  className: propsClassName,
  size,
  rightAlignValue = false,
  children,
  ...rest
}) => {
  let className = baseClass;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (size) {
    className += ` ${baseClass}--${size}`;
  }

  if (rightAlignValue) {
    className += ` ${baseClass}--right-align`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

AKeyValueTable.propTypes = {
  /**
   * The `AKeyValueTable` component requires the `AKeyValue` components value as the children.
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the font size
   */
  size: PropTypes.oneOf(["small"]),
  /**
   * Right align the value, for use with numbers
   */
  rightAlignValue: PropTypes.bool
};

export default AKeyValueTable;
