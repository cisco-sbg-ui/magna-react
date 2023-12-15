import React from "react";

const ADataTableRow = ({
  className: propsClassName,
  isKeySelected,
  isSelected,
  ...rest
}) => {
  let className = "a-data-table__row";
  if (isSelected) {
    className += " a-data-table__row--selected";
  }
  if (isKeySelected) {
    className += " a-data-table__row--key-selected";
  }
  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return <tr role="row" className={className} {...rest} />;
};

ADataTableRow.displayName = "ADataTableRow";

export default ADataTableRow;
