import {useEffect} from "react";

import {
  useFloating,
  arrow,
  autoUpdate,
  hide,
  offset,
  type FloatingContext,
  type ExtendedRefs,
  type MiddlewareData,
  type ReferenceType
} from "@floating-ui/react";

import {flip, shift, type Placement} from "@floating-ui/dom";

type UseFloatingBase = (
  open: boolean,
  onOpenChange: (open: boolean) => void,
  anchorRef: React.RefObject<HTMLElement> | undefined,
  domRect: DOMRect | undefined,
  arrowRef: React.RefObject<SVGSVGElement>,
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
  onOpenChange,
  anchorRef,
  domRect,
  arrowRef,
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
    elements: {reference: anchorRef?.current}
  });

  useEffect(() => {
    if (!domRect) {
      return;
    }

    floatingRefs.setPositionReference({
      getBoundingClientRect() {
        return {
          ...domRect
        };
      }
    });
  }, [floatingRefs, domRect]);

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
