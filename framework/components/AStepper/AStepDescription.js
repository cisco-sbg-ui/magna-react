import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const AStepDescription = forwardRef(
  ({className: propsClassName = "", children, ...rest}, ref) => {
    const containerClassName = " a-step__hint";
    const className = propsClassName + containerClassName;

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

AStepDescription.propTypes = {
  /**
   * String representing class names to be passed to component container
   */
  className: PropTypes.string
};

AStepDescription.displayName = "AStepDescription";

export default AStepDescription;
