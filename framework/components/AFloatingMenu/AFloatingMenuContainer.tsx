import React, {forwardRef, useContext} from "react";

import {FloatingPortal} from "@floating-ui/react";

import AAppContext from "../AApp/AAppContext";

import {AFloatingMenuContainerProps} from "./types";

const AFloatingMenuContainer = forwardRef<
  HTMLElement,
  AFloatingMenuContainerProps
>(
  (
    {children, className: propsClassName, style, ignoreOutsideClick, ...rest},
    ref
  ) => {
    const {appRef} = useContext(AAppContext);
    const attrs: {[key: string]: any} = {};

    let className = `a-floating-menu-base`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (ignoreOutsideClick) {
      attrs["data-ignore-outside-click"] = true;
    }

    return (
      <FloatingPortal root={appRef.current}>
        <div
          {...attrs}
          {...rest}
          ref={ref as any}
          className={className}
          style={style}>
          {children}
        </div>
      </FloatingPortal>
    );
  }
);

AFloatingMenuContainer.displayName = "AFloatingMenuContainer";

export default AFloatingMenuContainer;
