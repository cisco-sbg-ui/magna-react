import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const AStepTitle = forwardRef(
  ({className: propsClassName = "", children, ...rest}, ref) => {
    const className = `a-step__label ${propsClassName}`.trim();
    return (
      <div {...rest} ref={ref} className={className}>
        <span className="a-step__title">{children}</span>
      </div>
    );
  }
);

AStepTitle.propTypes = {
  /**
   * String representing class names to be passed to component container
   */
  className: PropTypes.string
};

AStepTitle.displayName = "AStepTitle";

export default AStepTitle;
