import React, {forwardRef} from "react";

import {AFloatingMenuContainerProps} from "../AFloatingMenu/types";

const AFloatingMenuContainer = forwardRef<
  HTMLElement,
  AFloatingMenuContainerProps
>(({children, className: propsClassName, style, ...rest}, ref) => {
  let className = `a-floating-menu-base`;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div
      data-ignore-outside-click
      {...rest}
      ref={ref as any}
      className={className}
      style={style}>
      {children}
    </div>
  );
});

AFloatingMenuContainer.displayName = "AFloatingMenuContainer";

export default AFloatingMenuContainer;
