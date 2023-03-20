import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASpinLoader.scss";
const baseClass = "a-spin-loader";

const ASpinLoader = forwardRef(
  (
    {
      className: propsClassName,
      size,
      children,
      childPlacement = "bottom",
      ...rest
    },
    ref
  ) => {
    let className = baseClass,
      containerClassName = `${baseClass}__container`,
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

    switch (childPlacement) {
      case "left":
        className += ` ${baseClass}--placement-left`;
        break;

      case "right":
        className += ` ${baseClass}--placement-right`;
        break;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div className={className} {...rest}>
        {["top", "left"].includes(childPlacement) && children}
        <div className={containerClassName}>
          <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            ref={ref}
            className={spinnerClasslassName}
          />
        </div>
        {["bottom", "right"].includes(childPlacement) && children}
      </div>
    );
  }
);

ASpinLoader.propTypes = {
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * When used with `children`, renders the loader when true, `children`
   * when false.
   */
  loading: PropTypes.bool,
  /**
   * Place children above or below spinner
   */
  childPlacement: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

ASpinLoader.displayName = "ASpinLoader";

export default ASpinLoader;
