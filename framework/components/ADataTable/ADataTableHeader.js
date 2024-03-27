import React from "react";
import PropTypes from "prop-types";

const ADataTableHeader = ({className, colWidthSm, ...rest}) => {
  let propsClassName = className;

  if (colWidthSm) {
    propsClassName += ` col-width-sm`;
  }

  return (
    <th
      role="columnheader"
      className={`a-data-table__header${
        propsClassName ? ` ${propsClassName}` : ""
      }`}
      {...rest}
    />
  );
};

ADataTableHeader.displayName = "ADataTableHeader";

ADataTableHeader.propTypes = {
  /**  Additional class names to be applied to the table header. */
  className: PropTypes.string
};

export default ADataTableHeader;
