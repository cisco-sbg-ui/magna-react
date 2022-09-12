import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./AProgressbar.scss";

const AProgressbar = forwardRef(
  (
    {
      className: propsClassName,
      disabled,
      displayText,
      percentage = 0,
      striped,
      ...rest
    },
    ref
  ) => {
    let className = "a-progressbar";

    if (disabled) {
      className += " a-progressbar--disabled";
    }

    if (striped) {
      className += " a-progressbar--striped";
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
        role="progressbar">
        {displayText && (
          <span className="a-progressbar__label">{fixedPercentage}%</span>
        )}
        <div className="a-progressbar__bar">
          <div
            className="a-progressbar__fill"
            style={{width: `${fixedPercentage}%`}}></div>
        </div>
      </div>
    );
  }
);

AProgressbar.propTypes = {
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
  striped: PropTypes.bool
};

AProgressbar.displayName = "AProgressbar";

export default AProgressbar;
