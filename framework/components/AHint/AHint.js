import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import "./AHint.scss";

const AHint = forwardRef(
  (
    {children, className: propsClassName, validationState = "default", ...rest},
    ref
  ) => {
    let className = "a-hint";
    if (validationState !== "default") {
      className += ` a-hint--${validationState}`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {["warning", "danger"].includes(validationState) && (
          <AIcon left className="a-hint__icon">
            {validationState === "danger" ? "critical-stop" : "warning"}
          </AIcon>
        )}
        <span>{children}</span>
      </div>
    );
  }
);

AHint.propTypes = {
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"])
};

AHint.displayName = "AHint";

export default AHint;
