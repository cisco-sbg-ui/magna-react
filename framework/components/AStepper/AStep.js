import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import {keyCodes} from "../../utils/helpers";
import AIcon from "../AIcon";

import "./AStepper.scss";

const AStep = forwardRef(
  (
    {
      className: propsClassName = "",
      active,
      visited,
      disabled,
      showIconOnVisited = true,
      stepNumber,
      children,
      setActiveStep,
      isVertical,
      dividerStyle,
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

    if (!disabled && setActiveStep) {
      className += ` a-step--cursor`;
    }

    let style;
    if (
      React.Children.count(children) === 1 ||
      (children[1] && !children[1].props.children)
    ) {
      style = {marginTop: "3px"};
    }

    const onClick = (e) => {
        e.stopPropagation();

        if (disabled) {
          return;
        }

        setActiveStep && setActiveStep(stepNumber);
      },
      keyDownHandler = (e) => {
        if (
          setActiveStep &&
          [keyCodes.enter, keyCodes.space].includes(e.keyCode)
        ) {
          onClick(e);
        }
      };

    const titleView = isVertical ? (
      <div className="a-step__content" style={style}>
        {children}
      </div>
    ) : (
      <>
        <span className="a-step__divider" style={dividerStyle} />
        {children[0] || children}
      </>
    );

    return (
      <div
        {...rest}
        ref={ref}
        className={className}
        onClick={onClick}
        onKeyDown={keyDownHandler}
        tabIndex={0}
        role="menuitem"
      >
        <div className="a-step__icon-container">
          <div className="a-step__icon">
            {!disabled && visited && showIconOnVisited ? (
              <AIcon size={16} className="a-step__icon__checkmark">
                check
              </AIcon>
            ) : (
              stepNumber
            )}
          </div>
        </div>
        {titleView}
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
  stepNumber: PropTypes.number,
  /**
   * Callback to set step as active
   * */
  setActiveStep: PropTypes.func
};

AStep.displayName = "AStep";

export default AStep;
