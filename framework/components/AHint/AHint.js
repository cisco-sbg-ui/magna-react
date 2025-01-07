import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AAlert from "../AAlert";
import "./AHint.scss";

const AHint = forwardRef(
  (
    {
      children,
      hint,
      className: propsClassName,
      validationState = "default",
      ...rest
    },
    ref
  ) => {
    const hasValidationState =
      validationState !== "default" && !!validationState;
    let className = "a-hint";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let content = <span>{children}</span>;
    if (hasValidationState) {
      content = (
        <AAlert level={validationState} dismissible={false}>
          {hint || children}
        </AAlert>
      );
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {content}
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
