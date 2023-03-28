import {useCallback, useEffect} from "react";
import {keyCodes} from "../../utils/helpers";

const useEscapeKeydown = (options) => {
  const {isEnabled, onKeydown} = options;

  const detectEscKeydown = useCallback(
    (e) => {
      const key = e.key;
      const keyCode = e.keyCode;
      if (key === "Escape" || keyCode === keyCodes.esc) {
        if (typeof onKeydown === "function") {
          onKeydown(e);
        }
      }
    },
    [onKeydown]
  );

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    window.addEventListener("keydown", detectEscKeydown);

    return () => {
      window.removeEventListener("keydown", detectEscKeydown);
    };
  }, [isEnabled, onKeydown, detectEscKeydown]);
};

export default useEscapeKeydown;
