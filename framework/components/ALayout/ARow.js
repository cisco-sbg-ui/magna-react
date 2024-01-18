import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ARow = forwardRef(
  ({className: propsClassName, noGutters = false, ...rest}, ref) => {
    let className = "a-row";

    if (noGutters) {
      className += " a-row--no-gutters";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div {...rest} ref={ref} className={className} />;
  }
);

ARow.propTypes = {
  /**
   * Removes gutters.
   */
  noGutters: PropTypes.bool
};

ARow.displayName = "ARow";

export default ARow;
