import PropTypes from "prop-types";
import React, {forwardRef, useRef, useMemo} from "react";
import {useResizeObserver} from "../../utils/hooks";

import "./AStepper.scss";

const AStepper = forwardRef(
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
      () => width / numberOfSteps,
      [width, numberOfSteps]
    );

    const renderChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        isVertical: vertical,
        dividerStyle: {width: `${dividerWidth}px`}
      });
    });

    const renderItem = React.Children.map(children, (child) => {
      if (child.props.active) {
        return child.props.children;
      }
    });

    return (
      <div ref={containerRef} className="a-steps-container">
        <div {...rest} ref={ref} className={className}>
          {renderChildren}
        </div>
        {!vertical && (
          <div className="a-steps__description">{renderItem[1]}</div>
        )}
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
