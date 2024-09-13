import PropTypes from "prop-types";
import React, {forwardRef, useContext} from "react";

import AButtonGroupContext from "../AButtonGroup/AButtonGroupContext";
import ASpinner from "../ASpinner";
import AIcon from "../AIcon";

import "./AButton.scss";

const AButton = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      destructive = false,
      disabled = false,
      href,
      icon,
      small = false,
      medium = true,
      onClick,
      primary,
      secondary,
      target,
      tertiary,
      tertiaryAlt,
      type = "button",
      value,
      loading = false,
      noPadding = false,
      open = false,
      dropdown = false,
      floating = false,
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
    } else if (floating) {
      className += "floating";
    } else {
      className += destructive ? "primary-destructive" : "primary";
    }

    if (disabled || loading) {
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

    if (noPadding) {
      className += " a-button--inline-btn";
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
        if (loading) {
          return;
        }

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
      TagName = component || "a";
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

    const dropdownIcon = open ? "caret-up" : "caret-down";

    return (
      <TagName {...props}>
        {loading && (
          <ASpinner size="small" style={{marginRight: children ? "4px" : ""}} />
        )}
        {children}
        {dropdown && <AIcon className="ml-1">{dropdownIcon}</AIcon>}
      </TagName>
    );
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
   * Applies dropdown icon style
   */
  dropdown: PropTypes.bool,
  /**
   * Required with dropdown prop to toggle dropdown icon
   */
  open: PropTypes.bool,
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
  medium: PropTypes.bool,
  /**
   * Automatically add a loading spinner to the button
   */
  loading: PropTypes.bool,
  /**
   * Removes padding on any button, defaults to false
   */
  noPadding: PropTypes.bool,
  /**
   * Toggles the floating variant style
   */
  floating: PropTypes.bool
};

AButton.displayName = "AButton";

export default AButton;
