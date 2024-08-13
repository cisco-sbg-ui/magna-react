import useEscapeKeydown from "../useEscapeKeydown/useEscapeKeydown";
import useOutsideClick from "../useOutsideClick/useOutsideClick";
import useReturnFocusOnClose from "../useReturnFocusOnClose/useReturnFocusOnClose";

interface PopupQuickExitProps {
  popupRef?: React.RefObject<HTMLElement>;
  onExit: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isEnabled: boolean;
}

const usePopupQuickExit = (options: PopupQuickExitProps) => {
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
