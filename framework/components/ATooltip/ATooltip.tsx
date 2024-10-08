import React, {forwardRef} from "react";

import AFloatingBase from "../AFloatingBase/AFloatingBase";
import "./ATooltip.scss";

import {ATooltipProps} from "./types";

const ATooltip = forwardRef<HTMLElement, ATooltipProps>(
  (
    {
      anchorRef,
      className: propsClassName,
      onClose,
      open,
      placement = "top",
      pointer = true,
      removeSpacer = false,
      role = "tooltip",
      maxWidth,
      offset,
      style: propsStyle = {},
      children,
      ...rest
    },
    ref
  ) => {
    const style: React.CSSProperties = {
      ...propsStyle
    };

    let className = `a-tooltip`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (maxWidth) {
      style.maxWidth = maxWidth;
    }

    return (
      <AFloatingBase
        {...rest}
        anchorRef={anchorRef}
        style={style}
        placement={placement}
        offset={offset}
        ref={ref}
        role={role}
        className={className}
        onClose={onClose}
        open={open}
        pointer={pointer}
        removeSpacer={removeSpacer}>
        {children}
      </AFloatingBase>
    );
  }
);

ATooltip.displayName = "ATooltip";

export default ATooltip;
