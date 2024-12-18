/* eslint-disable @typescript-eslint/no-unused-vars */
import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import "./AEmptyState.scss";

const baseClass = "a-empty-state",
  backgroundClass = `${baseClass}__background`,
  labelClass = `${baseClass}__label`,
  messageClass = `${baseClass}__message`,
  messageContainerClass = `${baseClass}__message-container`;

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
      xsmall,
      small,
      medium,
      large,
      xlarge,
      horizontal = false,
      ...rest
    },
    ref
  ) => {
    let className = baseClass,
      iconClass = `${baseClass}__icon`,
      containerClass = `${baseClass}__container`,
      icon = propsIcon;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    // @deprecation
    // Remove non-magnetic states and classes in next major version
    if (variant === "success" || variant === "positive") {
      className += ` ${baseClass}--state-success`; // deprecated
      className += ` ${baseClass}--state-positive`;
      icon = "positive";
    } else if (variant === "warning") {
      className += ` ${baseClass}--state-warning`;
      icon = "warning";
    } else if (variant === "danger" || variant === "negative") {
      className += ` ${baseClass}--state-danger`; // deprecated
      className += ` ${baseClass}--state-negative`;
      icon = "negative";
    } else if (variant === "info" || !propsIcon) {
      className += ` ${baseClass}--state-info`;
      icon = "info";
    }

    if (horizontal) {
      className += ` ${baseClass}--layout-horizontal`;
    }

    if (xsmall) {
      className += ` ${baseClass}--xsmall`;
    } else if (small) {
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
          <AIcon className={backgroundClass}>empty-background</AIcon>
          <AIcon className={iconClass}>{propsIcon || icon}</AIcon>
        </div>
        <div className={messageContainerClass}>
          {label && <div className={labelClass}>{label}</div>}
          {message && <div className={messageClass}>{message}</div>}
          {children}
        </div>
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
  /**
   * Empty state variant
   * default `"info"`
   *
   * deprecations - use "negative" instead of "danger"
   * deprecations = use "positive" instead of "success"
   *
   */
  variant: PropTypes.oneOf([
    "success",
    "positive",
    "negative",
    "warning",
    "danger",
    "info"
  ]),
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
  message: PropTypes.node,
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
