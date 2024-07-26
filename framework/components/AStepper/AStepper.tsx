import React, {forwardRef, useRef, useMemo} from "react";
import {useResizeObserver} from "../../utils/hooks";

import "./AStepper.scss";
import {AStepProps, AStepperProps} from "./types";

const AStepper = forwardRef<HTMLDivElement, AStepperProps>(
  ({className: propsClassName = "", children, vertical, ...rest}, ref) => {
    const containerRef = useRef(null);
    const {width} = useResizeObserver(containerRef);
    const numberOfSteps = React.Children.count(children);

    let className = "a-steps";
    if (vertical) {
      className += " a-steps--orientation-vertical";
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const dividerWidth = useMemo(
      () => (width ? width / numberOfSteps : 0),
      [width, numberOfSteps]
    );

    const renderChildren = React.Children.map(children, (child) => {
      if (React.isValidElement<AStepProps>(child)) {
        return React.cloneElement(child, {
          isVertical: vertical,
          dividerStyle: {width: `${dividerWidth}px`}
        });
      }
    });

    const renderItem = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.active) {
        return React.Children.toArray(child.props.children);
      }
    });

    return (
      <div ref={containerRef} className="a-steps-container">
        <div {...rest} ref={ref} className={className}>
          {renderChildren}
        </div>
        {!vertical && renderItem?.length && (
          <div className="a-steps__description">{renderItem[1]}</div>
        )}
      </div>
    );
  }
);

AStepper.displayName = "AStepper";

export default AStepper;
