import React from "react";
import PropTypes from "prop-types";

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

ADataTableRow.propTypes = {
  /**  Additional class names to be applied to the table row. */
  className: PropTypes.string,

  /** Is this row selected */
  isSelected: PropTypes.bool,

  /** Is this row selected by keyboard navigation */
  isKeySelected: PropTypes.bool
};

export default ADataTableRow;
