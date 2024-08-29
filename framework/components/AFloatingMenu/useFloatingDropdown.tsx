import {
  useDismiss,
  useFloating,
  useInteractions,
  autoUpdate,
  hide,
  offset
} from "@floating-ui/react";

import {flip} from "@floating-ui/dom";

type UseFloatingDropdown = (
  open: boolean,
  onOpenChange: (open: boolean) => void
) => {
  floatingRefs: object;
  floatingStyles: React.CSSProperties;
  middlewareData: any;
  getReferenceProps: (props: any) => any;
  getFloatingProps: (props: any) => any;
};

const useFloatingDropdown: UseFloatingDropdown = (open, onOpenChange) => {
  const {
    context,
    refs: floatingRefs,
    floatingStyles,
    middlewareData
  } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: "bottom",
    open,
    onOpenChange,
    middleware: [flip(), hide(), offset(4)]
  });

  const dismiss = useDismiss(context);
  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss]);

  return {
    context,
    floatingRefs,
    floatingStyles,
    middlewareData,
    getReferenceProps,
    getFloatingProps
  };
};

export default useFloatingDropdown;
