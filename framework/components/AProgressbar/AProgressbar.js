import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import AIcon from "../AIcon";

import "./AProgressbar.scss";

const baseClass = "a-progressbar";

const STATUS_ICON = {
  positive: "positive",
  negative: "negative"
};

const AProgressbar = forwardRef(
  (
    {
      className: propsClassName,
      barClassName: propsBarClassName,
      fillClassName: propsFillClassName,
      barStyle,
      fillStyle,
      animationDuration,
      size = "medium",
      disabled,
      displayText,
      percentage = 0,
      striped,
      indeterminate,
      status,
      ...rest
    },
    ref
  ) => {
    let className = baseClass,
      barClass = `${baseClass}__bar`,
      fillClass = `${baseClass}__fill`;

    className += ` ${baseClass}--size-${size}`;

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

    if (propsBarClassName) {
      barClass += ` ${propsBarClassName}`;
    }

    if (propsFillClassName) {
      fillClass += ` ${propsFillClassName}`;
    }

    if (status === "negative") {
      fillClass += ` negative`;
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
        <div className={barClass} style={barStyle}>
          <div
            className={fillClass}
            style={{
              width: `${fixedPercentage}%`,
              animationDuration,
              ...fillStyle
            }}
          ></div>
        </div>
        {status && (
          <AIcon size="16px" style={{marginLeft: "12px"}}>
            {STATUS_ICON[status]}
          </AIcon>
        )}
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
   * Sets the size of the indicator.  Default is medium.
   */
  size: PropTypes.oneOf(["small", "medium"]),
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
  indeterminate: PropTypes.bool,
  /**
   * Class to apply to the bar element
   */
  barClassName: PropTypes.string,
  /**
   * Class to apply to the fill element
   */
  fillClassName: PropTypes.string,
  /**
   * Style to apply to the bar element
   */
  barStyle: PropTypes.object,
  /**
   * Style to apply to the fill element
   */
  fillStyle: PropTypes.object,
  status: PropTypes.oneOf(["info", "positive", "negative"])
};

AProgressbar.displayName = "AProgressbar";

export default AProgressbar;
