import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ALayout.scss";

const ACol = forwardRef(
  ({className: propsClassName, cols, xs, sm, md, lg, xl, ...rest}, ref) => {
    let className = "a-col";

    if (cols) {
      className += ` a-col-${cols}`;
    }

    if (xs) {
      className += ` a-colxs-${xs}`;
    }

    if (sm) {
      className += ` a-colsm-${sm}`;
    }

    if (md) {
      className += ` a-colmd-${md}`;
    }

    if (lg) {
      className += ` a-collg-${lg}`;
    }

    if (xl) {
      className += ` a-colxl-${xl}`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div {...rest} ref={ref} className={className} />;
  }
);

ACol.propTypes = {
  /**
   *  Sets the number of columns to span.
   */
  cols: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "auto"
  ]),
  /**
   *  Sets the number of columns to span at the xs breakpoint.
   */
  xs: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  /**
   *  Sets the number of columns to span at the sm breakpoint.
   */
  sm: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  /**
   *  Sets the number of columns to span at the md breakpoint.
   */
  md: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  /**
   *  Sets the number of columns to span at the lg breakpoint.
   */
  lg: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ]),
  /**
   *  Sets the number of columns to span at the xl breakpoint.
   */
  xl: PropTypes.oneOf([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ])
};

ACol.displayName = "ACol";

export default ACol;
