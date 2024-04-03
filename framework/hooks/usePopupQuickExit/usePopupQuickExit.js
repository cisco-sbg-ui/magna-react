import useEscapeKeydown from "../useEscapeKeydown/useEscapeKeydown";
import useOutsideClick from "../useOutsideClick/useOutsideClick";
import useReturnFocusOnClose from "../useReturnFocusOnClose/useReturnFocusOnClose";

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
  useReturnFocusOnClose({
    isOpen: isEnabled
  });
};

export default usePopupQuickExit;
