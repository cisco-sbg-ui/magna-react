import {useEffect} from "react";
import {isBackwardTab, isForwardTab} from "../../utils/helpers";

function createTrap(walker) {
  return function trap(e) {
    const isTabbingBack = isBackwardTab(e);
    const isTabbingForward = isForwardTab(e);

    if (!isTabbingBack && !isTabbingForward) {
      return;
    }

    e.preventDefault();

    let nextNode = isTabbingForward ? walker.nextNode() : walker.previousNode();

    if (!nextNode) {
      // The user is at the end of the tree, so send focus
      // to the first child of parent node.
      walker.parentNode();
      walker.firstChild();
      walker.currentNode.focus({focusVisible: true});
    } else if (nextNode === walker.root) {
      // The user is at the top of the tree, so send focus
      // to the last child of parent node.
      walker.lastChild();
      walker.currentNode.focus({focusVisible: true});
    } else {
      // The user is tabbing within the parent node.
      nextNode.focus({focusVisible: true});
    }
  };
}

const useFocusTrap = ({rootRef, isEnabled = true}) => {
  useEffect(() => {
    if (!isEnabled || !rootRef.current) {
      return;
    }
    const treeWalker = document.createTreeWalker(
      rootRef.current,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) => {
          if (node === rootRef.current) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return node.tabIndex < 0
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    const firstFocusableNode = treeWalker.nextNode();
    if (firstFocusableNode) {
      const animationPromises = rootRef.current
        .getAnimations({subtree: true})
        .map((animation) => animation.finished);
      Promise.allSettled(animationPromises).then(() =>
        firstFocusableNode.focus({focusVisible: true})
      );
    }
    const trap = createTrap(treeWalker);
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [rootRef, isEnabled]);
};

export default useFocusTrap;
