import {useEffect, useRef} from "react";

// Reapply focus to trigger element once overlay component is closed
export default function useReturnFocusOnClose({
  isOpen = false
}) {
  const openRef = useRef();

  useEffect(() => {
    if (isOpen) {
      openRef.current = document.activeElement;
    } else if (openRef.current){
      openRef.current.focus();
    }
  }, [isOpen]);
};
