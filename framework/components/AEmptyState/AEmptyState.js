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
      iconClass: propsIconClass,
      label,
      message,
      children,
      small,
      medium,
      large,
      xlarge,
      ...rest
    },
    ref
  ) => {
    const baseClass = "a-empty-state",
      backgroundClass = `${baseClass}__background`,
      labelClass = `${baseClass}__label`,
      messageClass = `${baseClass}__message`;
    let className = baseClass,
      iconClass = `${baseClass}__icon`,
      containerClass = `${baseClass}__container`,
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

    if (small) {
      className += ` ${baseClass}--small`;
    } else if (medium) {
      className += ` ${baseClass}--medium`;
    } else if (large) {
      className += ` ${baseClass}--large`;
    } else if (xlarge) {
      className += ` ${baseClass}--xlarge`;
    } else {
      className += ` ${baseClass}--medium`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <div className={containerClass}>
          <AIcon className={backgroundClass}>emptyBackground</AIcon>
          <AIcon className={iconClass}>{propsIcon || icon}</AIcon>
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
  /**
   * Sets the container size to small.
   */
  small: PropTypes.bool,
  /**
   * Sets the container size to medium.
   */
  medium: PropTypes.bool,
  /**
   * Sets the container size to large.
   */
  large: PropTypes.bool,
  /**
   * Sets the container size to extra large.
   */
  xlarge: PropTypes.bool,

  /** Node children */
  children: PropTypes.node
};

AEmptyState.displayName = "AEmptyState";

export default AEmptyState;
