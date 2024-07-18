import React, {forwardRef, useRef} from "react";

import AMenuBase from "../AMenuBase";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATooltip.scss";

import {ATooltipProps} from "./types";

const ATooltip = forwardRef<HTMLElement, ATooltipProps>(
  (
    {
      anchorRef,
      children,
      className: propsClassName,
      onClose,
      open,
      placement,
      pointer = true,
      role = "tooltip",
      maxWidth,
      style: propsStyle,
      ...rest
    },
    ref
  ) => {
    const tooltipRef = useRef(null);
    const combinedRef: any = useCombinedRefs(ref, tooltipRef); //TODO Fix when useCombinedRefs is typed
    const style = {...propsStyle};

    let className = `a-tooltip`;
    if (pointer) {
      className += " a-tooltip--arrow";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (maxWidth) {
      style.maxWidth = maxWidth;
    }

    return (
      <AMenuBase
        {...rest}
        style={style}
        ref={combinedRef}
        role={role}
        className={className}
        onClose={onClose}
        open={open}
        placement={placement}
        removeSpacer={true}
        anchorRef={anchorRef}
        pointer={pointer}>
        {children}
      </AMenuBase>
    );
  }
);

ATooltip.displayName = "ATooltip";

export default ATooltip;
