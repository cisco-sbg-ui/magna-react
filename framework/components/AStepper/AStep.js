import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AIcon from "../AIcon";

import "./AStepper.scss";

const AStep = forwardRef(
  (
    {
      className: propsClassName = "",
      active,
      visited,
      disabled,
      showIconOnVisited,
      stepNumber,
      children,
      ...rest
    },
    ref
  ) => {
    let className = `a-step ${propsClassName}`.trim();
    if (disabled) {
      className += ` a-step__disabled`;
    } else {
      if (visited) {
        className += ` a-step__visited`;
      } else if (active) {
        className += ` a-step__active`;
      } else {
        className += ` a-step__default`;
      }
    }

    let style;
    if (children.length === 1 || (children[1] && !children[1].props.children)) {
      style = {margin: "0"};
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <div className="a-step__icon">
          {!disabled && visited && showIconOnVisited ? (
            <AIcon size={12} className="a-step__icon__checkmark">
              checkmark
            </AIcon>
          ) : (
            stepNumber
          )}
        </div>
        <div className="a-step__content" style={style}>
          {children}
        </div>
      </div>
    );
  }
);

AStep.propTypes = {
  /**
   * Mark step as active.
   */
  active: PropTypes.bool,
  /**
   * Mark step as visited.
   */
  visited: PropTypes.bool,
  /**
   * Mark step as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Show 'marked' icon on visited steps
   */
  showIconOnVisited: PropTypes.bool,
  /**
   * String representing class names to be passed to component container
   */
  className: PropTypes.string,
  /**
   * Step number.
   */
  stepNumber: PropTypes.number
};

AStep.displayName = "AStep";

export default AStep;
