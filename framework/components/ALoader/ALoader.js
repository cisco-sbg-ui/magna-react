import React, {forwardRef} from "react";
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
      component = INDICATORS.spinner,
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

    const TagName =
        typeof component === "string" ? INDICATORS[component] : component,
      indicatorType =
        typeof component === "string" ? component : TagName.displayName;

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

    switch (placement) {
      case "top":
        className += ` ${baseClass}--placement-top`;
        break;
      case "right":
        className += ` ${baseClass}--placement-right`;
        break;
      case "bottom":
        className += ` ${baseClass}--placement-bottom`;
        break;
      case "left":
        className += ` ${baseClass}--placement-left`;
        break;
    }

    className += ` ${baseClass}--loader-${indicatorType}`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div ref={ref} className={className} {...rest}>
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
  component: PropTypes.oneOfType([
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
