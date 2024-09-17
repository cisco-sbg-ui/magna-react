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
  anchorRef: React.RefObject<HTMLElement>,
  arrowRef: React.RefObject<SVGSVGElement>,
  placement?: Placement,
  placementOffset?: number | undefined
) => {
  context: FloatingContext;
  floatingRefs: ExtendedRefs<ReferenceType>;
  floatingStyles: React.CSSProperties;
  middlewareData: MiddlewareData;
  isReferenceHidden: boolean;
};

const useFloatingBase: UseFloatingBase = (
  open,
  onOpenChange,
  anchorRef,
  arrowRef,
  placement = "top",
  placementOffset
) => {
  const {
    context,
    refs: floatingRefs,
    floatingStyles,
    middlewareData
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
    elements: {reference: anchorRef.current}
  });

  return {
    context,
    floatingRefs,
    floatingStyles,
    middlewareData,
    // For now, disable this feature since it breaks tests cases in some environments
    // TODO re-enable this as a breaking change, since it is nice to have
    // menus hide when their anchor reference is scrolled out of view
    isReferenceHidden: false //!!middlewareData.hide?.referenceHidden
  };
};

export default useFloatingBase;
