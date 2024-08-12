import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import AIcon from "../AIcon";

import "./AProgressbar.scss";

const baseClass = "a-progressbar";

const STATUS_ICON = {
  success: "positive",
  error: "alert"
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
      helperText,
      percentage = 0,
      striped,
      status,
      label,
      stacked,
      centered,
      ...rest
    },
    ref
  ) => {
    let className = baseClass,
      labelClass = `${baseClass}__label`,
      helperTextClass = `${baseClass}__helper-text`,
      barContainerClass = `${baseClass}__bar-container`,
      barClass = `${barContainerClass}__bar`,
      fillClass = `${barContainerClass}__fill`,
      contentRightClass = `${barContainerClass}__content-right`;

    className += ` ${baseClass}--size-${size}`;

    if (striped) {
      className += ` ${baseClass}--striped`;
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

    if (status) {
      fillClass += ` ${status}`;
    }

    if (stacked) {
      className += ` ${baseClass}__stacked`;
    }

    if (centered) {
      className += ` ${baseClass}__centered`;
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
        {label && (
          <div className={labelClass}>
            <label>{label}</label>
          </div>
        )}
        <div className={barContainerClass}>
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
          <div className={contentRightClass}>
            {status && <AIcon size={20}>{STATUS_ICON[status]}</AIcon>}
            {status === "active" && <span>{percentage}%</span>}
          </div>
        </div>

        {helperText && (
          <div className={`${helperTextClass} ${status}`}>
            <p>{helperText}</p>
          </div>
        )}
      </div>
    );
  }
);

AProgressbar.propTypes = {
  label: PropTypes.string,
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
   * Includes a subtext, also sets label position to top
   */
  helperText: PropTypes.string,
  /**
   * The percent completed.
   */
  percentage: PropTypes.number,
  /**
   * Toggles the striped display variant.
   */
  striped: PropTypes.bool,
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
