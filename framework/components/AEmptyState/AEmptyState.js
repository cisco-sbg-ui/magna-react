import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import "./AEmptyState.scss";

const AEmptyState = forwardRef(
  (
    {
      className: propsClassName,
      variant,
      icon: propsIcon,
      iconSet = "magna",
      iconClass: propsIconClass,
      label,
      message,
      children,
      ...rest
    },
    ref
  ) => {
    const baseClass = "a-empty-state",
      containerClass = `${baseClass}__container`,
      backgroundClass = `${baseClass}__background`,
      labelClass = `${baseClass}__label`,
      messageClass = `${baseClass}__message`;
    let className = baseClass,
      iconClass = `${baseClass}__icon`,
      icon = propsIcon;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (variant === "success") {
      className += ` ${baseClass}--state-success`;
      icon = "positive";
    } else if (variant === "warning") {
      className += ` ${baseClass}--state-warning`;
      icon = "warning";
    } else if (variant === "danger") {
      className += ` ${baseClass}--state-danger`;
      icon = "negative";
    } else if (!propsIcon) {
      className += ` ${baseClass}--state-info`;
      icon = "info";
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <div className={containerClass}>
          <AIcon iconSet="magna" className={backgroundClass}>
            emptyBackground
          </AIcon>
          <AIcon iconSet={iconSet} className={iconClass}>
            {propsIcon || icon}
          </AIcon>
        </div>
        {label && <div className={labelClass}>{label}</div>}
        {message && <div className={messageClass}>{message}</div>}
        {children}
      </div>
    );
  }
);

AEmptyState.defaultProps = {
  variant: "info"
};

AEmptyState.propTypes = {
  /**
   * Empty state variant
   */
  variant: PropTypes.oneOf(["success", "positive", "warning", "danger"]),
  /**
   * Custom icn name
   */
  icon: PropTypes.string,
  /**
   * Icon set for custom icon
   */
  iconSet: PropTypes.oneOf(["atomic", "magna"]),
  /**
   * Class name for the icon
   */
  iconClass: PropTypes.string,
  /**
   * Label for the empty state
   */
  label: PropTypes.string,
  /**
   * Message describing the empty state
   */
  message: PropTypes.string,
  /** Node children */
  children: PropTypes.node
};

AEmptyState.displayName = "AEmptyState";

export default AEmptyState;
