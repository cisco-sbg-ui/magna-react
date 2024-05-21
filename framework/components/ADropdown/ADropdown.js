import PropTypes from "prop-types";
import React, {forwardRef, useRef, useState} from "react";
import AButton from "../AButton";
import AMenu from "../AMenu";

const ADropdown = forwardRef(
  (
    {
      className: propsClassName,
      primary,
      secondary,
      tertiary,
      tertiaryAlt,
      disabled,
      destructive,
      noPadding,
      loading,
      title,
      small,
      position,
      children,
      ...rest
    },
    ref
  ) => {
    const buttonRef = useRef(null);
    const [open, setOpen] = useState(false);

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const dropdownVariantProps = {
      primary,
      secondary,
      tertiary,
      tertiaryAlt,
      destructive,
      disabled,
      noPadding,
      loading,
      small
    };

    return (
      <div {...rest} ref={ref} className={propsClassName}>
        <AButton
          ref={buttonRef}
          dropdown
          open={open}
          onClick={() => setOpen(!open)}
          aria-haspopup="true"
          {...dropdownVariantProps}
        >
          {title}
        </AButton>
        <AMenu
          anchorRef={buttonRef}
          open={open}
          placement={position}
          onClose={() => setOpen(false)}
        >
          {children}
        </AMenu>
      </div>
    );
  }
);

ADropdown.propTypes = {
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
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
   * Toggles the `tertiary` style variant.
   */
  tertiary: PropTypes.bool,
  /**
   * Toggles the `tertiaryAlt` style variant.
   */
  tertiaryAlt: PropTypes.bool,
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
   * Title of dropdown can be string or react element
   */
  title: PropTypes.node
};

ADropdown.displayName = "ADropdown";

export default ADropdown;
