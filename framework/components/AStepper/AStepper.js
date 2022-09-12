import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./AStepper.scss";

const AStepper = forwardRef(
  ({className: propsClassName = "", children, vertical, ...rest}, ref) => {
    let className = "a-steps";
    if (vertical) {
      className += " a-steps--orientation-vertical";
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

AStepper.propTypes = {
  /**
   *  When true, stepper orientation will be vertical
   */
  vertical: PropTypes.bool,
  /**
   * String representing class names to be passed to component container
   */
  className: PropTypes.string
};

AStepper.displayName = "AStepper";

export default AStepper;
