import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import {
  useMergeRefs,
  useTransitionStyles,
  FloatingArrow,
  FloatingPortal
} from "@floating-ui/react";

import AAppContext from "../AApp/AAppContext";
import {isRealBrowser} from "../../utils/helpers";

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
      duration: propsDuration = {open: 200, close: 200},
      pointer = true,
      removeSpacer,
      ignoreOutsideClick = true,
      hideIfReferenceHidden = true,
      alignPointerOnSide = false,
      onClose,
      open,
      ...rest
    },
    ref
  ) => {
    const {appRef} = useContext(AAppContext);
    const className = `a-floating-base`;
    const attrs: {[key: string]: any} = {};

    const arrowRef = useRef<SVGSVGElement>(null);
    const interactiveRef = useRef<HTMLDivElement>(null);

    const placement = mapPlacement(propsPlacement);

    const [isInteractiveMounted, setIsInteractiveMounted] = useState(false);

    const placementOffset = removeSpacer ? 0 : offset || 8;

    const duration = isRealBrowser ? propsDuration : {open: 0, close: 0};

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
    const isStart = placement.includes("-start");
    const isEnd = placement.includes("-end");
    const isVertical =
      placement.startsWith("top") || placement.startsWith("bottom");
    const sideAlignArrow = alignPointerOnSide && isEdge && isVertical;
    const isSmaller =
      (elements?.domReference?.getBoundingClientRect().width ||
        elements?.reference?.getBoundingClientRect()?.width ||
        0) > (elements?.floating?.offsetWidth || 0);
    const isEdgeAlignedAndSmaller = isEdge && isSmaller;

    const {isMounted, styles: transitionStyles} = useTransitionStyles(context, {
      duration,
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

    const shouldHide =
      isRealBrowser && hideIfReferenceHidden && isReferenceHidden;

    const style: React.CSSProperties = {
      ...propsStyle,
      ...floatingStyles,
      visibility: shouldHide ? "hidden" : "visible"
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

    if (!open && duration.close === 0) {
      return null;
    }

    let arrowPlacement;
    if (sideAlignArrow) {
      if (isStart) {
        arrowPlacement = {left: "12px", right: "unset"};
      } else if (isEnd) {
        arrowPlacement = {right: "12px", left: "unset"};
      }
    }

    let tooltipContent = (
      <div
        className={propsClassName}
        role={role}
        style={{
          ...transitionStyles
        }}
        data-placement={placement}>
        {children}
        {pointer && !isNaN(context?.x) && floatingRefs?.floating?.current && (
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="a-floating-base-arrow"
            width={ARROW_WIDTH}
            height={ARROW_HEIGHT}
            style={arrowPlacement}
            staticOffset={
              isEdgeAlignedAndSmaller && !sideAlignArrow
                ? isStart
                  ? "90%"
                  : "10%"
                : null
            }
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

    if (ignoreOutsideClick) {
      attrs["data-ignore-outside-click"] = true;
    }

    return (
      <FloatingPortal root={appRef.current}>
        <div
          ref={combinedRef}
          className={className}
          style={style}
          {...rest}
          {...attrs}
          data-placement={placement}>
          {tooltipContent}
        </div>
      </FloatingPortal>
    );
  }
);

AFloatingBase.displayName = "AFloatingBase";

export default AFloatingBase;
