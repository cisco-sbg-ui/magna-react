import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import {keyCodes} from "../../utils/helpers";
import "./ATag.scss";

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

    if (count) {
      className += ` a-tag--count`;
    }

    if (level) {
      className += ` a-tag--state-${level}`;
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

    return <TagName {...props}>{children}</TagName>;
  }
);

ATag.propTypes = {
  /**
   * Sets the base component. Useful for integrating with routers.
   */
  component: PropTypes.elementType,
  /**
   * Indicates if the data should represent a count - more rounded
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
  level: PropTypes.oneOf([
    "info",
    "information",
    "positive",
    "warning",
    "negative"
  ])
};

ATag.displayName = "ATag";

export default ATag;
