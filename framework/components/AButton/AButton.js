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
      destructive = false,
      disabled,
      href,
      icon,
      small = false,
      medium = false,
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
      className += destructive ? "primary-destructive" : "primary";
    } else if (secondary) {
      className += destructive ? "secondary-destructive" : "secondary";
    } else if (tertiary) {
      className += "tertiary";
    } else if (tertiaryAlt) {
      className += "tertiary-alt";
    } else {
      className += destructive ? "primary-destructive" : "primary";
    }

    if (disabled) {
      className += " disabled";
    }

    if (small) {
      className += " a-button--small";
    } else if (medium) {
      className += " a-button--medium";
    }

    if (selectedValues && selectedValues.includes(value)) {
      className += " a-button--selected";
    }

    if (selectedValues && !selectedValues.includes(value)) {
      className += " a-button--option";
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
      props.value = value;
      props.target = target;
      props["aria-disable"] = disabled;
    } else {
      props.type = type;
      props.value = value;
      props["aria-disabled"] = disabled;
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
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /**
   * Destructive - button for destructive action, should be used with confirm dialog/modal when clicked
   */
  destructive: PropTypes.bool,
  /**
   * Apply Magnetic small size styles vs only re-skin styles, defaults to false
   */
  small: PropTypes.bool,
  /**
   * Apply Magnetic medium size styles vs only re-skin styles, defaults to false
   */
  medium: PropTypes.bool
};

AButton.displayName = "AButton";

export default AButton;
