import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardBasic = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      state,
      stateCustomColor,
      lifted = false,
      interactive = false,
      selected,
      ...rest
    },
    ref
  ) => {
    const showState = state && state !== "disabled";

    let className = "a-card-basic";

    if (lifted) {
      className += " a-card-basic--lifted";
    }

    const computedProps = {};

    if (interactive) {
      className += " a-card-basic--interactive";

      if (selected) {
        className += " a-card-basic--selected";
      }

      if (state !== "disabled") {
        computedProps.tabIndex = 0;
      }
    }

    if (state === "dormant") {
      className += " a-card-basic--state-dormant";
    } else if (state === "positive") {
      className += " a-card-basic--state-positive";
    } else if (state === "warning") {
      className += " a-card-basic--state-warning";
    } else if (state === "negative") {
      className += " a-card-basic--state-negative";
    } else if (state === "informational") {
      className += " a-card-basic--state-informational";
    } else if (state === "disabled") {
      className += " a-card-basic--state-disabled";
    } else if (state === "custom") {
      className += " a-card-basic--state-custom";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const stateStyle =
      state === "custom" && stateCustomColor
        ? {background: `${stateCustomColor}`}
        : null;

    const TagName = component || "div";

    return (
      <TagName {...computedProps} {...rest} ref={ref} className={className}>
        {showState ? (
          <div className="a-card-state" style={stateStyle}></div>
        ) : null}

        <div className="a-card-wrapper">{children}</div>
      </TagName>
    );
  }
);

ACardBasic.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,

  /**
   * Sets the card state color.
   * It reflects the colors of the magnetic design states.
   * Value "custom" sets the state color from "stateCustomColor" property.
   */
  state: PropTypes.oneOf([
    "dormant",
    "positive",
    "warning",
    "negative",
    "informational",
    "disabled",
    "custom"
  ]),

  /**
   * If the card state is set to "custom", the state color will be set to this value. Color value can be any of the legal CSS color values.
   * example: stateCustomColor="#F2638C"
   */
  stateCustomColor: PropTypes.string,

  /**
   * This sets the shadow on the card
   */
  lifted: PropTypes.bool,
  /**
   * This sets the interactive border on the card
   */
  interactive: PropTypes.bool,
  /**
   * Indicates the card is selected
   */
  selected: PropTypes.bool
};

ACardBasic.displayName = "ACardBasic";

export default ACardBasic;
