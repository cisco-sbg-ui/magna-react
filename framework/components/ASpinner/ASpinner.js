import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASpinner.scss";

const ASpinner = forwardRef(
  (
    {
      className: propsClassName,
      component,
      size,
      labelAlignment,
      stopped,
      children,
      ...rest
    },
    ref
  ) => {
    let className = "a-spinner";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (stopped) className += " a-spinner--stopped";

    switch (size) {
      case "small":
        className += " a-spinner--small";
        break;
      case "medium":
        className += " a-spinner--medium";
        break;
      case "large":
        className += " a-spinner--large";
        break;
      case "extra-large":
        className += " a-spinner--extra-large";
        break;
      default:
        className += " a-spinner--medium";
    }

    switch (labelAlignment) {
      case "bottom":
        className += " a-spinner--label-alignment-bottom";
        break;
      case "left":
        className += " a-spinner--label-alignment-left";
        break;
      default:
        className += " a-spinner--label-alignment-left";
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        <div className="a-spinner__figure">
          <svg className="a-spinner__svg" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="19"></circle>
          </svg>
        </div>
        <div className="a-spinner__label">{children}</div>
      </TagName>
    );
  }
);

ASpinner.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,

  /**
   * Sets the spinner size.
   * The default spinner size is set to "medium".
   */
  size: PropTypes.oneOf(["small", "medium", "large", "extra-large"]),

  /**
   * Sets how the label will be displayed.
   * The default label alignment is set to "left".
   */
  labelAlignment: PropTypes.oneOf(["bottom", "left"]),

  /**
   * If stopped is set to true, the spinner will not be animated.
   */
  stopped: PropTypes.bool
};

ASpinner.displayName = "ASpinner";

export default ASpinner;
