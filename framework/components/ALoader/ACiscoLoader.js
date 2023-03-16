import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import "./ACiscoLoader.scss";

const baseClass = "a-cisco-loader";

const ACiscoLoader = forwardRef(
  ({className: propsClassName, loading, children, center, ...rest}, ref) => {
    let className = baseClass;

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
      >
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-1"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-2"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-3"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-4"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-5"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-6"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-7"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-8"></div>
        <div className="a-cisco-loader__bar a-cisco-loader__bar--index-9"></div>
      </div>
    );
  }
);

ACiscoLoader.displayName = "ACiscoLoader";

ACiscoLoader.propTypes = {
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

export default ACiscoLoader;
