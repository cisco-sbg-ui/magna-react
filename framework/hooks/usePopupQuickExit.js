import useEscapeKeydown from "./useEscapeKeydown";
import useOutsideClick from "./useOutsideClick";

const usePopupQuickExit = (options) => {
  const {popupRef, isEnabled, onExit} = options;
  useOutsideClick({
    rootRef: popupRef,
    isEnabled,
    onClick: onExit
  });
  useEscapeKeydown({
    isEnabled,
    onKeydown: onExit
  });
};

export default usePopupQuickExit;
