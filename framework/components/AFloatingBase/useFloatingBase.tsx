import {AAnchorRef, ADOMRectFull} from "../../types";

import {useEffect} from "react";

import {
  useFloating,
  arrow,
  autoUpdate,
  hide,
  offset,
  useDismiss,
  useInteractions,
  type FloatingContext,
  type ExtendedRefs,
  type MiddlewareData,
  type ReferenceType,
  type OpenChangeReason
} from "@floating-ui/react";

import {flip, shift, type Placement} from "@floating-ui/dom";

type UseFloatingBase = (
  open: boolean,
  anchorRef: AAnchorRef,
  arrowRef: React.RefObject<SVGSVGElement>,
  onOpenChange?: (
    open: boolean,
    event: Event,
    reason: OpenChangeReason
  ) => void,
  placement?: Placement,
  placementOffset?: number | undefined
) => {
  context: FloatingContext;
  floatingRefs: ExtendedRefs<ReferenceType>;
  floatingStyles: React.CSSProperties;
  middlewareData: MiddlewareData;
  elements: {
    domReference: ReferenceType | null;
    reference: ReferenceType | null;
    floating: HTMLElement | null;
  };
  isReferenceHidden: boolean;
};

const useFloatingBase: UseFloatingBase = (
  open,
  anchorRef,
  arrowRef,
  onOpenChange,
  placement = "top",
  placementOffset
) => {
  const {
    context,
    refs: floatingRefs,
    floatingStyles,
    middlewareData,
    elements
  } = useFloating({
    whileElementsMounted: autoUpdate,
    placement,
    strategy: "fixed",
    open,
    onOpenChange,
    middleware: [
      offset(placementOffset),
      flip(),
      shift(),
      hide(),
      arrow({
        element: arrowRef
      })
    ],
    elements: {
      reference:
        (anchorRef as unknown as React.RefObject<HTMLElement>)?.current || null
    }
  });

  const dismiss = useDismiss(context, {
    enabled: !!onOpenChange
  });

  useInteractions([dismiss]);

  useEffect(() => {
    // If we have a ref, we don't need to set the reference element
    if ((anchorRef as unknown as React.RefObject<HTMLElement>)?.current) {
      return;
    }

    if (!(anchorRef as unknown as ADOMRectFull).x) {
      return;
    }

    floatingRefs.setPositionReference({
      getBoundingClientRect() {
        return {
          ...(anchorRef as unknown as ADOMRectFull)
        };
      }
    });
  }, [floatingRefs, anchorRef]);

  return {
    context,
    floatingRefs,
    floatingStyles,
    middlewareData,
    elements,
    isReferenceHidden: !!middlewareData.hide?.referenceHidden
  };
};

export default useFloatingBase;
