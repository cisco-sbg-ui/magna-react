import React from "react";
import PropTypes from "prop-types";

const ADataTableCell = ({className, ...rest}) => (
  <td
    role="cell"
    className={`a-data-table__cell${className ? ` ${className}` : ""}`}
    {...rest}
  />
);

ADataTableCell.displayName = "ADataTableCell";

ADataTableCell.propTypes = {
  /**  Additional class names to be applied to the table cell. */
  className: PropTypes.string
};

export default ADataTableCell;
