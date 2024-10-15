import PropTypes from "prop-types";
import React, {forwardRef, useState} from "react";

import AButton from "../AButton";
import AFloatingMenu from "../AFloatingMenu";
import useFloatingDropwdown from "../AFloatingMenu/useFloatingDropdown";

const ADropdown = forwardRef(
  (
    {
      className: propsClassName,

      component = AButton,
      primary,
      secondary,
      tertiary,
      tertiaryAlt,
      disabled = false,
      destructive,
      noPadding,
      loading,
      title,
      small,
      position,
      menuClass,
      menuStyle,
      children,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const Component = component || AButton;

    const {
      context,
      floatingRefs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      isReferenceHidden
    } = useFloatingDropwdown(isOpen, setIsOpen);

    const menuComponentProps = {
      className: menuClass,
      style: {
        ...menuStyle,
        ...floatingStyles,
        visibility: isReferenceHidden ? "hidden" : "visible"
      }
    };

    const variantProps =
      component === AButton
        ? {
            primary,
            secondary,
            tertiary,
            tertiaryAlt,
            destructive,
            disabled,
            noPadding,
            loading,
            small
          }
        : {
            disabled
          };

    return (
      <div {...rest} ref={ref} className={propsClassName}>
        <Component
          ref={floatingRefs.setReference}
          disabled={disabled}
          dropdown
          open={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          {...variantProps}
          {...getReferenceProps()}
        >
          {title}
        </Component>
        <AFloatingMenu
          ref={floatingRefs.setFloating}
          anchorRef={floatingRefs.reference}
          menuRef={floatingRefs.floating}
          context={context}
          open={isOpen}
          placement={position}
          {...menuComponentProps}
          {...getFloatingProps()}
        >
          {children}
        </AFloatingMenu>
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
  title: PropTypes.node,
  /**
   * Style the dropdown
   */
  dropdownStyle: PropTypes.object
};

ADropdown.displayName = "ADropdown";

export default ADropdown;
