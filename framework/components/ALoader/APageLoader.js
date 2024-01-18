import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const baseClass = "a-page-loader";

/**
 * DEPRECATED
 */
const APageLoader = forwardRef(
  (
    {className: propsClassName, size, center, children, loading, ...rest},
    ref
  ) => {
    let className = baseClass;

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

    if (center) {
      className += ` ${baseClass}--center`;
    }

    if (children && !loading) {
      return children;
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * When used with `children`, renders the loader when true, `children`
   * when false.
   */
  loading: PropTypes.bool,
  /**
   * Center the loader with margin auto
   */
  center: PropTypes.bool
};

APageLoader.displayName = "APageLoader";

export default APageLoader;
