import {useCallback, useEffect} from "react";

const useEscapeKeydown = (options) => {
  const {isEnabled, onClick} = options;

  const detectEscKeydown = useCallback(
    (e) => {
      const key = e.key;
      if (key === "Escape") {
        if (typeof onClick === "function") {
          onClick(e);
        }
      }
    },
    [onClick]
  );

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    window.addEventListener("keydown", detectEscKeydown);

    return () => {
      window.removeEventListener("keydown", detectEscKeydown);
    };
  }, [isEnabled, onClick, detectEscKeydown]);
};

export default useEscapeKeydown;
