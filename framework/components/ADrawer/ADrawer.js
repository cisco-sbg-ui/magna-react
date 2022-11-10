import {forwardRef} from "react";

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
    isFixed = true,
    className: propsClassName,
    children,
    isSlim,
    isOpen,
    slideIn = "left",
    ...rest
  } = props;
  const Component = as || "div";
  let className = `drawer fixed--${slideIn}`;

  if (!isOpen) {
    className += " hidden";
  }
  if (isSlim) {
    className += " slim";
  }
  if (!isSlim) {
    className += " full";
  }
  if (isFixed) {
    className += " fixed";
  }
  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <Component
      style={props.style}
      isOpen={isOpen}
      ref={ref}
      className={className}
    >
      {children}
    </Component>
  );
}

export default forwardRef(Drawer);
