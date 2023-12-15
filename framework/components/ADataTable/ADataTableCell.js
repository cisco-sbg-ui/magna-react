import React from "react";

const ADataTableCell = ({className, ...rest}) => (
  <td
    role="cell"
    className={`a-data-table__cell${className ? ` ${className}` : ""}`}
    {...rest}
  />
);

ADataTableCell.displayName = "ADataTableCell";

export default ADataTableCell;
