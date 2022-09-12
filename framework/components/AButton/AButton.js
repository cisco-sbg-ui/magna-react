import PropTypes from "prop-types";
import React, {forwardRef, useContext} from "react";

import AButtonGroupContext from "../AButtonGroup/AButtonGroupContext";
import "./AButton.scss";

const AButton = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      disabled,
      href,
      icon,
      onClick,
      primary,
      secondary,
      target,
      tertiary,
      tertiaryAlt,
      type = "button",
      value,
      ...rest
    },
    ref
  ) => {
    const {selectedValues, toggleValue} = useContext(AButtonGroupContext);

    let className = "a-button focus-box-shadow a-button--";

    if (primary) {
      className += "primary";
    } else if (secondary) {
      className += "secondary";
    } else if (tertiary) {
      className += "tertiary";
    } else if (tertiaryAlt) {
      className += "tertiary-alt";
    } else {
      className += "primary";
    }

    if (disabled) {
      className += " disabled";
    }

    if (selectedValues && selectedValues.includes(value)) {
      className += " a-button--selected";
    }

    if (icon) {
      className += " a-button--icon";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let TagName = "button";
    const props = {
      ...rest,
      ref,
      className,
      onClick: (e) => {
        if (toggleValue) {
          toggleValue(value);
        }

        onClick && onClick(e);
      }
    };

    if (href || component) {
      props.tabIndex = 0;
    }

    if (href) {
      TagName = "a";
      if (!disabled) {
        props.href = href;
        props.target = target;
      }
    } else if (component) {
      TagName = component;
      props.disabled = disabled;
      props.value = value;
      props.target = target;
    } else {
      props.disabled = disabled;
      props.type = type;
      props.value = value;
    }

    return <TagName {...props}>{children}</TagName>;
  }
);

AButton.propTypes = {
  /**
   * Sets the base component. Useful for integrating with routers.
   */
  component: PropTypes.elementType,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * If specified, the component will render as an HTML link.
   */
  href: PropTypes.string,
  /**
   * Signifies an icon-only button.
   */
  icon: PropTypes.bool,
  /**
   * Toggles the `primary` style variant. If no style variant is chosen, `primary` is applied.
   */
  primary: PropTypes.bool,
  /**
   * Toggles the `secondary` style variant.
   */
  secondary: PropTypes.bool,
  /**
   * If the `href` or `component` props is set, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
   */
  target: PropTypes.string,
  /**
   * Toggles the `tertiary` style variant.
   */
  tertiary: PropTypes.bool,
  /**
   * Toggles the `tertiaryAlt` style variant.
   */
  tertiaryAlt: PropTypes.bool,
  /**
   * The button type.
   */
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

AButton.displayName = "AButton";

export default AButton;
