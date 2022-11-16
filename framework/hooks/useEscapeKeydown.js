import {useCallback, useEffect} from "react";

const useEscapeKeydown = (options) => {
  const {isEnabled, onKeydown} = options;

  const detectEscKeydown = useCallback(
    (e) => {
      const key = e.key;
      if (key === "Escape") {
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
