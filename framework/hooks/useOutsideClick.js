import {useCallback, useEffect} from "react";

const useOutsideClick = (options) => {
  const {isEnabled, rootRef, onClick} = options;

  const detectOutside = useCallback(
    (e) => {
      const ignoreEl = e.target.closest("[data-ignore-outside-click]");
      const shouldIgnore =
        ignoreEl && (e.target === ignoreEl || ignoreEl.contains(e.target));
      // Don't register as outside click if the click is coming from within a menu
      if (!rootRef?.current?.contains(e.target) && !shouldIgnore) {
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
    window.addEventListener("mousedown", detectOutside);

    return () => {
      window.removeEventListener("mousedown", detectOutside);
    };
  }, [isEnabled, onClick, detectOutside]);
};

export default useOutsideClick;
