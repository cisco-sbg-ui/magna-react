import React from "react";

const ADataTableHeader = ({className, ...rest}) => (
  <th
    role="columnheader"
    className={`a-data-table__header${className ? ` ${className}` : ""}`}
    {...rest}
  />
);

ADataTableHeader.displayName = "ADataTableHeader";

export default ADataTableHeader;
