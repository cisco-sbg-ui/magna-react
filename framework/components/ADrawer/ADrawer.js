import {forwardRef} from "react";
import AModal from "../AModal/AModal";

import "./ADrawer.scss";

/**
 * A Drawer slides in from an edge of the viewport.
 *
 * To open/close the Drawer, toggle the `isOpen` prop. To render
 * a smaller representation of the drawer, use the `isSlim` prop.
 */
function Drawer(props, ref) {
  const {
    as,
    /** Determines if the drawer should render as a Modal (and trap focus) */
    asModal = true,

    /* Determines if the Drawer has a self-contained element to render in */
    contained = false,

    /** Determines if the Drawer renders alongside siblings */
    inline = false,

    /** Determines if the drawer should render as a smaller size */
    slim = false,

    /** Toggles the visibility of the Drawer */
    isOpen,
    className: propsClassName,
    children,
    slideIn = "left",
    ...rest
  } = props;
  const DrawerPanelComponent = as || "div";
  const orientation =
    slideIn === "bottom" || slideIn === "top" ? "horizontal" : "vertical";
  let className = `drawer drawer--${orientation} drawer--${slideIn}`;

  if (inline) {
    className += ` drawer--inline`;
  }
  if (contained) {
    className += ` drawer--contained`;
  }
  if (slim) {
    className += ` drawer--slim`;
  }
  if (!isOpen) {
    className += ` drawer--hidden`;
  }
  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (!asModal) {
    return (
      <DrawerPanelComponent
        {...rest}
        style={props.style}
        isOpen={isOpen}
        ref={ref}
        className={className}
      >
        {children}
      </DrawerPanelComponent>
    );
  }

  return (
    <AModal isOpen={isOpen} {...rest}>
      <DrawerPanelComponent
        {...rest}
        style={props.style}
        isOpen={isOpen}
        ref={ref}
        className={className}
      >
        {children}
      </DrawerPanelComponent>
    </AModal>
  );
}

export default forwardRef(Drawer);
