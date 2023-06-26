import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import AIcon from "../AIcon";
import ARadio from "../ARadio/ARadio";

import {keyCodes} from "../../utils/helpers";
import "./ATag.scss";

const STATUS_ICON = {
  positive: "check-circle",
  warning: "warning-circle",
  negative: "x-circle",
  inactive: "minus-circle",
  disabled: "prohibit"
};

const BINARY_ICON = {
  active: <ARadio checked />,
  inactive: <ARadio disabled />
};

const ATag = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      count = false,
      href,
      onClick,
      onKeyDown,
      target,
      level,
      small,
      large,
      status,
      binary,
      color,
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

    if (binary === "active") {
      className += ` a-tag--binary-active`;
    }

    if (color) {
      className += ` a-tag--${color}`;
    }

    let TagName = "div";
    const props = {
      ...rest,
      ref,
      className,
      onClick,
      onKeyDown: (e) => {
        if (!href && onClick && [keyCodes.enter].includes(e.keyCode)) {
          e.preventDefault();
          onClick(e);
        } else {
          onKeyDown && onKeyDown(e);
        }
      }
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
    }

    let tagWithIcon = null;

    if (status) {
      tagWithIcon = (
        <>
          <AIcon className="a-icon--status" left>
            {STATUS_ICON[status]}
          </AIcon>
          {children}
        </>
      );
    }

    if (binary) {
      tagWithIcon = (
        <div>
          {BINARY_ICON[binary]}
          {children}
        </div>
      );
    }

    return <TagName {...props}>{tagWithIcon || children}</TagName>;
  }
);

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
   * ** Deprecated **
   *  Style differentiation no longer necessary.
   * Indicates if the data should represent a count - more rounded
   *
   */
  count: PropTypes.bool,
  /**
   * If specified, the component will render as an HTML link.
   */
  href: PropTypes.string,
  /**
   * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
   */
  target: PropTypes.string,
  /**
   * Specifies the display variant.
   */
  large: PropTypes.bool,
  /**
   * ** Deprecated **
   *  States now handled by the status and binary props
   */
  level: PropTypes.oneOf([
    "info",
    "information",
    "positive",
    "warning",
    "negative"
  ]),
  /**
   * Will apply the icon along with the status color.
   */ status: PropTypes.oneOf([
    "positive",
    "warning",
    "negative",
    "inactive",
    "disabled"
  ]),
  /**
   * Will apply the icon along with the binary color.
   */
  binary: PropTypes.oneOf(["active", "inactive"]),
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
  ])
};

ATag.displayName = "ATag";

export default ATag;
