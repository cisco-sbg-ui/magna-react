import React from "react";
import PropTypes from "prop-types";

const ADataTableHeader = ({className, ...rest}) => (
  <th
    role="columnheader"
    className={`a-data-table__header${className ? ` ${className}` : ""}`}
    {...rest}
  />
);

ADataTableHeader.displayName = "ADataTableHeader";

ADataTableHeader.propTypes = {
  /**  Additional class names to be applied to the table header. */
  className: PropTypes.string
};

export default ADataTableHeader;
