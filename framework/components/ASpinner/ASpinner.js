import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ASpinner = forwardRef(
  (
    {
      className: propsClassName,
      component,
      size = "medium",
      labelAlignment = "right",
      stopped = false,
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
      case "right":
        className += " a-spinner--label-alignment-right";
        break;
      default:
        className += " a-spinner--label-alignment-right";
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        <div className="a-spinner__figure">
          <svg className="a-spinner__svg" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="19"></circle>
          </svg>
        </div>
        {children ? <div className="a-spinner__label">{children}</div> : null}
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
   * The default label alignment is set to "right".
   */
  labelAlignment: PropTypes.oneOf(["bottom", "right"]),

  /**
   * If stopped is set to true, the spinner will not be animated.
   */
  stopped: PropTypes.bool
};

ASpinner.displayName = "ASpinner";

export default ASpinner;
