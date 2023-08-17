import {useEffect} from "react";

const useKeydown = (targetKeys, onKeydown, isEnabled = true) => {
  useEffect(() => {
    if (!isEnabled) {
      return () => {};
    }

    const handleKeyDown = (event) => {
      const {key} = event;
      if (typeof onKeydown === "function" && targetKeys.includes(key)) {
        onKeydown(key, event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKeys, onKeydown, isEnabled]);
};

export default useKeydown;
