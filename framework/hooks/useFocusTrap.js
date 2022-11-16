import {useEffect} from "react";

const TABBABLE_KEYS = {
  Tab: "Tab",
  Shift: "Shift"
};

function createTrap(walker) {
  return function trap(e) {
    const key = e.key;
    if (!TABBABLE_KEYS[key]) {
      return;
    }
    e.preventDefault();
    let nextFocusableNode;

    // Focus should go to the previous element
    if (e.shiftKey && key === TABBABLE_KEYS.Tab) {
      nextFocusableNode = walker.previousNode();
    } else if (key === TABBABLE_KEYS.Tab) {
      nextFocusableNode = walker.nextNode();
    }
    if (nextFocusableNode) {
      nextFocusableNode.focus();
    }
  };
}

function acceptNode(node) {
  // todo - enhance filter
  return node.tabIndex < 0 ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
}

const useFocusTrap = ({rootRef, isEnabled = true}) => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    const treeWalker = document.createTreeWalker(
      rootRef.current,
      NodeFilter.SHOW_ELEMENT,
      {acceptNode}
    );
    const firstFocusableNode = treeWalker.nextNode();
    if (firstFocusableNode) {
      const animationPromises = rootRef.current
        .getAnimations({subtree: true})
        .map((animation) => animation.finished);
      Promise.allSettled(animationPromises).then(() =>
        firstFocusableNode.focus()
      );
    }
    const trap = createTrap(treeWalker);
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [rootRef, isEnabled]);
};

export default useFocusTrap;
