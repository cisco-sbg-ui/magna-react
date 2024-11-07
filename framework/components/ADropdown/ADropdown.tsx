import PropTypes from "prop-types";
import React, {forwardRef, useState} from "react";
import {useMergeRefs} from "@floating-ui/react";

import AButton from "../AButton";
import AFloatingMenu from "../AFloatingMenu";
import useFloatingDropdown from "../AFloatingMenu/useFloatingDropdown";
import {ADropdownProps} from "./types";

const ADropdown = forwardRef<HTMLElement, ADropdownProps<React.ElementType>>(
  (
    {
      className: propsClassName,
      component = AButton,
      disabled = false,
      title,
      placement,
      menuClass,
      menuStyle,
      menuProps = {},
      onClick: propsOnClick,
      children,
      icon,
      hideIfReferenceHidden = true,
      ...rest
    },
    propsRef
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
    } = useFloatingDropdown(isOpen, setIsOpen);

    const ref = useMergeRefs([floatingRefs.setReference, propsRef]);

    const menuComponentProps = {
      ...menuProps,
      className: menuClass,
      style: {
        ...menuStyle,
        ...floatingStyles
      },
      hideIfReferenceHidden,
      isReferenceHidden
    };

    const iconOnly = icon && {
      icon,
      tertiaryAlt: "tertiaryAlt"
    };

    return (
      <>
        <Component
          ref={ref}
          disabled={disabled}
          className={propsClassName}
          open={isOpen}
          onClick={(e: React.MouseEvent) => {
            setIsOpen(!isOpen);
            propsOnClick && propsOnClick(e);
          }}
          aria-haspopup="true"
          dropdown={!icon} //Don't display caret if icon only dropdown
          {...iconOnly}
          {...rest}
          {...getReferenceProps()}>
          {title}
        </Component>
        <AFloatingMenu
          ref={floatingRefs.setFloating}
          anchorRef={floatingRefs.reference}
          menuRef={floatingRefs.floating}
          context={context}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          placement={placement}
          closeOnClick
          {...menuComponentProps}
          {...getFloatingProps()}>
          {children}
        </AFloatingMenu>
      </>
    );
  }
);

ADropdown.propTypes = {
  /**
   * Set the root component
   */
  component: PropTypes.object,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Title of dropdown can be string or react element
   */
  title: PropTypes.node,
  /**
   * Style the dropdown
   */
  menuStyle: PropTypes.object,
  /**
   * Add a className to the menu
   */
  menuClass: PropTypes.string,
  /**
   * Pass props to the menu component
   */
  menuProps: PropTypes.object,
  /**
   * Callback function when the dropdown is clicked
   */
  onClick: PropTypes.func,
  /**
   * Icon only dropdown
   */
  icon: PropTypes.bool
};

ADropdown.displayName = "ADropdown";

export default ADropdown;
