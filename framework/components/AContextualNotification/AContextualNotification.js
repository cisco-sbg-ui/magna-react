import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import AIcon from "../AIcon";
import "./AContextualNotification.scss";

const baseClass = "a-context";

const AContextualNotification = forwardRef(
  (
    {children, className: propsClassName, component, variant = "info", ...rest},
    ref
  ) => {
    let className = baseClass,
      iconClass = `${baseClass}__icon`,
      messageClass = `${baseClass}__message`,
      icon;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (variant === "success") {
      className += ` ${baseClass}--state-success`;
      icon = "good";
    } else if (variant === "warning") {
      className += ` ${baseClass}--state-warning`;
      icon = "warning";
    } else if (variant === "danger") {
      className += ` ${baseClass}--state-danger`;
      icon = "critical-stop";
    } else {
      className += ` ${baseClass}--state-info`;
      icon = "information";
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        <AIcon className={iconClass}>{icon}</AIcon>
        <div className={messageClass}>{children}</div>
      </TagName>
    );
  }
);

AContextualNotification.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,
  /**
   * Sets the display variant.
   */
  variant: PropTypes.oneOf(["success", "info", "warning", "danger"])
};

AContextualNotification.displayName = "AContextualNotification";

export default AContextualNotification;
