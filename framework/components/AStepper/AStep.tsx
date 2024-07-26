import React, {forwardRef} from "react";
import {keyCodes} from "../../utils/helpers";
import AIcon from "../AIcon";

import "./AStepper.scss";
import {AStepProps} from "./types";

const AStep = forwardRef<HTMLDivElement, AStepProps>(
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
    const childArray = children ? React.Children.toArray(children) : null;
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
    if (children) {
      const childArray = React.Children.toArray(children);
      if (
        childArray.length === 1 ||
        (React.isValidElement(childArray[1]) && !childArray[1].props.children)
      ) {
        style = {marginTop: "3px"};
      }
    }

    const onClick = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.stopPropagation();

        if (disabled) {
          return;
        }

        setActiveStep && setActiveStep(stepNumber);
      },
      keyDownHandler = (e: React.KeyboardEvent) => {
        if (
          setActiveStep &&
          [keyCodes.enter, keyCodes.space].includes(e.code as "Enter" | "Space") //must be code over key for "Space"
        ) {
          onClick(e);
        }
      };

    const titleView = isVertical ? (
      <div className="a-step__content" style={style}>
        {childArray}
      </div>
    ) : (
      <>
        <span className="a-step__divider" style={dividerStyle} />
        {(childArray && childArray[0]) || childArray}
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

AStep.displayName = "AStep";

export default AStep;
