import React, {forwardRef} from "react";
import AIcon from "../AIcon";

import {STATUS_ICON, baseClass} from "./constants";

import "./AProgressbar.scss";
import {AProgressbarProps} from "./types";

const AProgressbar = forwardRef<HTMLDivElement, AProgressbarProps>(
  (
    {
      className: propsClassName,
      barClassName: propsBarClassName,
      fillClassName: propsFillClassName,
      barStyle,
      fillStyle,
      animationDuration,
      helperText,
      size = "medium",
      percentage,
      animate,
      status = "active",
      label,
      stacked,
      centered,
      small,
      medium,
      ...rest
    },
    ref
  ) => {
    const barContainerClass = `${baseClass}__bar-container`;
    const labelClass = `${baseClass}__label`;
    const helperTextClass = `${baseClass}__helper-text`;
    const contentRightClass = `${barContainerClass}__content-right`;
    const progressbarSize =
      !medium && (small || size === "small") ? "small" : "medium"; //Temp backwards compatibility

    let className = baseClass,
      barClass = `${barContainerClass}__bar`,
      fillClass = `${barContainerClass}__fill`;

    className += ` ${baseClass}--size-${progressbarSize}`;

    if (animate) {
      className += ` ${baseClass}--animate`;
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

    const fixedPercentage =
      percentage && Math.max(0, Math.min(Math.round(percentage), 100));
    const hasPercentage = percentage !== undefined && percentage >= 0;
    const showPercentage = status === "active" && hasPercentage;

    return (
      <div
        {...rest}
        ref={ref}
        className={className}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={fixedPercentage}
        role="progressbar">
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
              }}></div>
          </div>
          <div className={contentRightClass}>
            {status && <AIcon size={20}>{STATUS_ICON[status]}</AIcon>}
            {showPercentage && <span>{fixedPercentage}%</span>}
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

AProgressbar.displayName = "AProgressbar";

export default AProgressbar;
