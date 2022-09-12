import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./APageLoader.scss";

const APageLoader = forwardRef(
  ({className: propsClassName, size, ...rest}, ref) => {
    let className = "a-page-loader";

    switch (size) {
      case "small": {
        className += " a-page-loader--size-small";
        break;
      }

      case "large": {
        className += " a-page-loader--size-large";
        break;
      }

      default: {
        className += " a-page-loader--size-medium";
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
      />
    );
  }
);

APageLoader.propTypes = {
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"])
};

APageLoader.displayName = "APageLoader";

export default APageLoader;
