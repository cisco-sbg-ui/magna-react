import React, {forwardRef} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ADotLoader from "./ADotLoader";
import ASpinLoader from "./ASpinLoader";
import AProgressbar from "../AProgressbar";

import "./ALoader.scss";

const baseClass = "a-generic-loader";

export const INDICATORS = {
  spinner: ASpinLoader,
  progressbar: AProgressbar,
  dot: ADotLoader
};

const ALoader = forwardRef(
  (
    {
      className: propsClassName,
      variant = INDICATORS.spinner,
      indicatorProps = {},
      size,
      placement = "top",
      children,
      ...rest
    },
    ref
  ) => {
    let className = baseClass,
      containerClassName = `${baseClass}__container`;

    const TagName = typeof variant === "string" ? INDICATORS[variant] : variant,
      indicatorType =
        typeof variant === "string" ? variant : TagName.displayName;

    const aLoaderClass = {
      [baseClass]: true,
      [`${baseClass}--loader-${indicatorType}`]: true,
      // size
      [`${baseClass}--size-small`]: size === "small",
      [`${baseClass}--size-large`]: size === "large",
      [`${baseClass}--size-medium`]: size === "medium" || !size,
      // placement
      [`${baseClass}--placement-top`]: placement === "top",
      [`${baseClass}--placement-right`]: placement === "right",
      [`${baseClass}--placement-bottom`]: placement === "bottom",
      [`${baseClass}--placement-left`]: placement === "left"
    };

    return (
      <div
        ref={ref}
        className={classNames(aLoaderClass, propsClassName)}
        {...rest}
      >
        {["bottom", "right"].includes(placement) && children}
        <div className={containerClassName}>
          <TagName {...indicatorProps} size={size}></TagName>
        </div>
        {["top", "left"].includes(placement) && children}
      </div>
    );
  }
);

ALoader.propTypes = {
  /**
   * Indicator type to use in the loader. Can be ADotLoader, ASpinLoader, or AProgressbar.
   */
  variant: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.oneOf(["dot", "spinner", "progressbar"])
  ]),
  /**
   * Props to pass to the indicator
   */
  indicatorProps: PropTypes.object,
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Place the indicator around the children. Has no effect if
   * `children` is undefined.
   */
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

ALoader.displayName = "ALoader";

export default ALoader;
