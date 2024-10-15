import React, {forwardRef} from "react";
import PropTypes from "prop-types";
import AIcon from "../AIcon";

import {keyCodes} from "../../utils/helpers";
import "./ATag.scss";

const STATUS_ICON = {
  excellent: "excellent",
  positive: "positive",
  "low-warning": "low-warning",
  warning: "warning",
  "severe-warning": "severe-warning",
  negative: "negative",
  inactive: "inactive",
  info: "info",
  disabled: "disabled",
  "in-progress": "in-progress",
  active: "positive",
  allow: "allow",
  deny: "disabled",
  alert: "alert"
};

const ATag = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      href,
      onClick,
      onKeyDown,
      target,
      small,
      large,
      status,
      color,
      hideStatusIcon = false,
      customIcon = false,
      dropdown = false,
      open = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const interactable = (href || onClick) && !disabled;
    let className = "a-tag focus-box-shadow";

    if (interactable) {
      className += ` interactable`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (large) {
      className += ` a-tag--lg`;
    }

    if (small) {
      className += ` a-tag--sm`;
    }

    if (status) {
      className += ` a-tag--status a-tag--status-${status}`;
    }

    if (color) {
      className += ` a-tag--${color}`;
    }

    if (hideStatusIcon) {
      className += ` a-tag--hide-status-icon`;
    }

    let TagName = interactable ? "button" : "div";
    const props = {
      ...rest,

      className,
      onClick: (e) => {
        if (disabled) {
          return;
        }

        onClick && onClick(e);
      },
      onKeyDown: (e) => {
        if (disabled) {
          return;
        }

        if (!href && onClick && [keyCodes.enter].includes(e.key)) {
          e.preventDefault();
          onClick(e);
        } else {
          //TODO not sure what this error is for
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onKeyDown && onKeyDown(e);
        }
      },
      target // Add the 'target' property to the props object
    };

    if (href) {
      TagName = "a";
      props.href = href;
      props.target = target;
    }

    if (onClick && !disabled) {
      props.role = "button";
    }

    if (href || onClick || component) {
      props.tabIndex = 0;
    }

    if (component) {
      TagName = component;
    }

    let tagWithIcon = null;

    if (status) {
      tagWithIcon = (
        <>
          {!customIcon && !hideStatusIcon && (
            <AIcon className="a-icon--status" left>
              {STATUS_ICON[status]}
            </AIcon>
          )}
          {React.isValidElement(customIcon) && customIcon}
          {children}
        </>
      );
    } else if (dropdown && !disabled) {
      const dropdownIcon = open ? "caret-up" : "caret-down";
      tagWithIcon = (
        <>
          {children}
          <AIcon className="a-tag--dropdown-icon" right>
            {dropdownIcon}
          </AIcon>
        </>
      );
    }

    return (
      <TagName ref={ref} {...props}>
        {tagWithIcon || children}
      </TagName>
    );
  }
);

ATag.displayName = "ATag";

ATag.propTypes = {
  /**
   * Sets the base component. Useful for integrating with routers.
   */
  component: PropTypes.elementType,
  /**
   * Apply small tag style. Default is false (medium size).
   */
  small: PropTypes.bool,
  /**
   * Apply large tag style. Default is false (medium size).
   */
  large: PropTypes.bool,
  /**
   * If specified, the component will render as an HTML link.
   */
  href: PropTypes.string,
  /**
   * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
   */
  target: PropTypes.string,
  /**
   * Will apply the icon along with the status color.
   */ status: PropTypes.oneOf([
    "excellent",
    "positive",
    "low-warning",
    "warning",
    "severe-warning",
    "negative",
    "inactive",
    "allow",
    "deny",
    "active",
    "disabled",
    "info",
    "in-progress"
  ]),
  /**
   * Optional accent colors
   */
  color: PropTypes.oneOf([
    "accentA",
    "accentB",
    "accentC",
    "accentD",
    "accentE",
    "accentF",
    "accentG",
    "accentH",
    "accentI",
    "accentK"
  ]),
  /**
   * Option for custom icon, can pass through children or directly into props.
   */
  customIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  /**
   * Hide the status icon
   *
   * default `false`
   */
  hideStatusIcon: PropTypes.bool,
  /**
   * Is for a dropdown menu
   */
  dropdown: PropTypes.bool,
  /**
   * Open state, if used as a menu
   */
  open: PropTypes.bool,
  /**
   *  Disable the menu, if there is an `href` or `onClick` set
   */
  disabled: PropTypes.bool
};

export default ATag;
