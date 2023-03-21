import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./AProgressbar.scss";

const baseClass = "a-progressbar";

const AProgressbar = forwardRef(
  (
    {
      className: propsClassName,
      animationDuration,
      size,
      disabled,
      displayText,
      percentage = 0,
      striped,
      indeterminate,
      ...rest
    },
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

    if (disabled) {
      className += ` ${baseClass}--disabled`;
    }

    if (striped) {
      className += ` ${baseClass}--striped`;
    }

    if (indeterminate) {
      percentage = 40;
      className += ` ${baseClass}--indeterminate`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const fixedPercentage = Math.max(0, Math.min(percentage, 100));

    return (
      <div
        {...rest}
        ref={ref}
        className={className}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={fixedPercentage}
        role="progressbar"
      >
        {displayText && (
          <span className={`${baseClass}__label`}>{fixedPercentage}%</span>
        )}
        <div className={`${baseClass}__bar`}>
          <div
            className={`${baseClass}__fill`}
            style={{
              width: `${fixedPercentage}%`,
              animationDuration
            }}
          ></div>
        </div>
      </div>
    );
  }
);

AProgressbar.propTypes = {
  /**
   * Determines the duration of the progress bar (if animated).
   * @example 0.3s
   */
  animationDuration: PropTypes.string,
  /**
   * Sets the size of the indicator.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Toggles whether the percentage is displayed additionally as text.
   */
  displayText: PropTypes.bool,
  /**
   * The percent completed.
   */
  percentage: PropTypes.number,
  /**
   * Toggles the striped display variant.
   */
  striped: PropTypes.bool,
  /**
   * Adds animation for an indeterminate progress
   */
  indeterminate: PropTypes.bool
};

AProgressbar.displayName = "AProgressbar";

export default AProgressbar;
