import React, {forwardRef} from "react";
import PropTypes from "prop-types";
import AIcon from "../AIcon";

import {keyCodes} from "../../utils/helpers";
import "./ATag.scss";

import {ATagProps} from "./types";

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

const ATag = forwardRef<HTMLElement, ATagProps<React.ElementType>>(
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
      customIcon = false,
      ...rest
    },
    ref
  ) => {
    let className = "a-tag focus-box-shadow";

    if (href || onClick) {
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

    let TagName: React.ElementType = "div";
    const props: React.HTMLProps<HTMLElement> = {
      ...rest,

      className,
      onClick,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (!href && onClick && [keyCodes.enter].includes(e.key as "Enter")) {
          e.preventDefault();
          onClick(e);
        } else {
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

    if (onClick) {
      props.role = "button";
    }

    if (href || onClick || component) {
      props.tabIndex = 0;
    }

    if (component) {
      TagName = component;
    } else if (onClick) {
      TagName = "button";
    }

    let tagWithIcon = null;

    if (status) {
      tagWithIcon = (
        <>
          {!customIcon && (
            <AIcon className="a-icon--status" left>
              {STATUS_ICON[status]}
            </AIcon>
          )}
          {React.isValidElement(customIcon) && customIcon}
          {children}
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

/**
 * NOTE:
 * The typescript docgen parser can't seem to pick up compound component types,
 * so leaving proptypes in for now.
 */
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
    "alert",
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
   * Make the tag interactive. Sets both `onClick` and `onKeyDown`. By default this changes
   * the ATag root HTML element to a button.
   */
  onClick: PropTypes.func,
  /**
   * Overrides the default keydown behavior when `onClick` is set.
   */
  onKeyDown: PropTypes.func
};

ATag.displayName = "ATag";

export default ATag;
