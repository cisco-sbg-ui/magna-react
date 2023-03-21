import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import "./ADotLoader.scss";

const ADotLoader = forwardRef(
  ({className: propsClassName, size, ...rest}, ref) => {
    let className = "a-dot-loader";

    switch (size) {
      case "small": {
        className += ` a-dot-loader--size-small`;
        break;
      }

      case "large": {
        className += ` a-dot-loader--size-large`;
        break;
      }

      default: {
        className += ` a-dot-loader--size-medium`;
      }
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div
        {...rest}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        ref={ref}
        className={className}
      >
        <div className="a-dot-loader__dot" />{" "}
        <div className="a-dot-loader__dot" />{" "}
        <div className="a-dot-loader__dot" />
      </div>
    );
  }
);

ADotLoader.propTypes = {
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"])
};

ADotLoader.displayName = "ADotLoader";

export default ADotLoader;
