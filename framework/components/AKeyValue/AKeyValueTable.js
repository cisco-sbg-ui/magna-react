import React from "react";
import PropTypes from "prop-types";

const baseClass = "a-key-value-table";

const AKeyValueTable = ({
  className: propsClassName,
  size,
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
  children: PropTypes.string.isRequired,
  /**
   * Sets the font size
   */
  size: PropTypes.oneOf(["small"])
};

export default AKeyValueTable;
