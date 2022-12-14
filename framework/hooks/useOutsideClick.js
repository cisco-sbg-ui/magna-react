import {useCallback, useEffect} from "react";

const useOutsideClick = (options) => {
  const {isEnabled, rootRef, onClick} = options;

  const detectOutside = useCallback(
    (e) => {
      if (!rootRef?.current?.contains(e.target)) {
        if (typeof onClick === "function") {
          onClick(e);
        }
      }
    },
    [rootRef, onClick]
  );

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    window.addEventListener("click", detectOutside);

    return () => {
      window.removeEventListener("click", detectOutside);
    };
  }, [isEnabled, onClick, detectOutside]);
};

export default useOutsideClick;
