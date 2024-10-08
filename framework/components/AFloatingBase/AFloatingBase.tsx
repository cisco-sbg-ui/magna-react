import React, {forwardRef, useEffect, useRef, useState} from "react";

import {
  useMergeRefs,
  useTransitionStyles,
  FloatingArrow
} from "@floating-ui/react";

import AFloatingMenuContainer from "../AFloatingMenu/AFloatingMenuContainer";

import useFloatingBase from "./useFloatingBase";
import {mapPlacement} from "./utils";
import {
  ARROW_WIDTH,
  ARROW_HEIGHT,
  TRANSLATION_OFFSET
} from "../ATooltip/constants";
import {AFloatingBaseProps} from "./types";
import "./AFloatingBase.scss";

const AFloatingBase = forwardRef<HTMLElement, AFloatingBaseProps>(
  (
    {
      anchorRef,
      interactive,
      trigger,
      children,
      className: propsClassName,
      role = "tooltip",
      style: propsStyle,
      placement: propsPlacement = "top",
      offset,
      pointer = true,
      removeSpacer,
      onClose,
      open,
      ...rest
    },
    ref
  ) => {
    const className = `a-floating-base`;

    const arrowRef = useRef<SVGSVGElement>(null);
    const interactiveRef = useRef<HTMLDivElement>(null);

    const placement = mapPlacement(propsPlacement);

    const [isInteractiveMounted, setIsInteractiveMounted] = useState(false);

    const placementOffset = removeSpacer ? 0 : offset || 8;

    const {context, floatingRefs, floatingStyles, elements, isReferenceHidden} =
      useFloatingBase(
        !!open,
        anchorRef,
        arrowRef,
        onClose,
        placement,
        placementOffset
      );

    const combinedRef: any = useMergeRefs([floatingRefs.setFloating, ref]);

    // If the reference element is wider than the tooltip, the arrow needs to be offset
    const isEdge = placement.includes("-start") || placement.includes("-end");
    const isSmaller =
      (elements?.domReference?.getBoundingClientRect().width || 0) >
      (elements?.floating?.offsetWidth || 0);
    const isEdgeAlignedAndSmaller = isEdge && isSmaller;

    const {isMounted, styles: transitionStyles} = useTransitionStyles(context, {
      duration: 200,
      initial: ({side}) => {
        return {
          opacity: 0,
          transform: {
            top: `translateY(-${TRANSLATION_OFFSET}px)`,
            bottom: `translateY(${TRANSLATION_OFFSET}px)`,
            left: `translateX(-${TRANSLATION_OFFSET}px)`,
            right: `translateX(${TRANSLATION_OFFSET}px)`
          }[side]
        };
      }
    });

    const style: React.CSSProperties = {
      ...propsStyle,
      ...floatingStyles,
      visibility: isReferenceHidden ? "hidden" : "visible"
    };

    useEffect(() => {
      if (!interactive || trigger === "click" || !isInteractiveMounted) {
        return;
      }

      const tooltip = interactiveRef?.current;

      const leave = () => {
        setTimeout(() => {
          const hoveringAnchor = (
            anchorRef as React.RefObject<HTMLElement>
          )?.current?.matches(":hover");

          if (!hoveringAnchor) {
            onClose && onClose();
          }
        }, 300);
      };

      tooltip?.addEventListener("mouseleave", leave);

      return () => {
        tooltip?.removeEventListener("mouseleave", leave);
      };
    }, [
      interactiveRef,
      anchorRef,
      interactive,
      trigger,
      onClose,
      isInteractiveMounted
    ]);

    useEffect(() => {
      if (!interactive) {
        return;
      }

      setIsInteractiveMounted(isMounted);
    }, [isMounted, interactive]);

    if (!isMounted) {
      return null;
    }

    let tooltipContent = (
      <div
        ref={floatingRefs.setFloating}
        role={role}
        className={propsClassName}
        style={{
          ...transitionStyles
        }}
        data-placement={placement}>
        {children}
        {pointer && (
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="a-floating-base-arrow"
            width={ARROW_WIDTH}
            height={ARROW_HEIGHT}
            staticOffset={isEdgeAlignedAndSmaller ? "15%" : null}
          />
        )}
      </div>
    );

    // Add an invisible boundary that expands past the offset so the mouseleave
    // event on anchorRef doesn't trigger the close event.
    if (interactive) {
      tooltipContent = (
        <div
          ref={interactiveRef}
          style={{
            border: `${placementOffset}px solid transparent`,
            margin: `-${placementOffset}px`
          }}>
          {tooltipContent}
        </div>
      );
    }

    return (
      <AFloatingMenuContainer
        {...rest}
        ref={combinedRef}
        className={className}
        style={style}
        data-placement={placement}>
        {tooltipContent}
      </AFloatingMenuContainer>
    );
  }
);

AFloatingBase.displayName = "AFloatingBase";

export default AFloatingBase;
