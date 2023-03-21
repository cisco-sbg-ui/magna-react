import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASpinLoader.scss";
const baseClass = "a-spin-loader";

const ASpinLoader = forwardRef(
  ({className: propsClassName, size, ...rest}, ref) => {
    let className = baseClass,
      spinnerClasslassName = `${baseClass}__spinner`;

    switch (size) {
      case "small": {
        className += ` ${baseClass}--size-small`;
        break;
      }

      case "large": {
        className += ` ${baseClass}--size-large`;
        break;
      }

      default: {
        className += ` ${baseClass}--size-medium`;
      }
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div className={className} {...rest}>
        <div
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          ref={ref}
          className={spinnerClasslassName}
        />
      </div>
    );
  }
);

ASpinLoader.propTypes = {
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"])
};

ASpinLoader.displayName = "ASpinLoader";

export default ASpinLoader;
