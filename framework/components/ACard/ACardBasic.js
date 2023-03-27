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
      lifted,
      ...rest
    },
    ref
  ) => {
    let className = "a-card-basic";

    if (lifted) className += " a-card-basic--lifted";

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
      <TagName {...rest} ref={ref} className={className}>
        {state ? (
          <div className={"a-card-state"} style={stateStyle}></div>
        ) : null}

        <div className={"a-card-wrapper"}>{children}</div>
      </TagName>
    );
  }
);

ACardBasic.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,
  state: PropTypes.oneOf([
    "dormant",
    "positive",
    "warning",
    "negative",
    "informational",
    "custom"
  ]),
  stateCustomColor: PropTypes.string,
  lifted: PropTypes.bool
};

ACardBasic.displayName = "ACardBasic";

export default ACardBasic;
