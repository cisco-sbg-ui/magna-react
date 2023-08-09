import {useCallback, useEffect} from "react";
import {
  canNodeReceiveFocus,
  isBackwardTab,
  isForwardTab
} from "../../utils/helpers";

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

export default function useFocusTrap({
  rootRef,
  autoFocusElementRef,
  isEnabled = true
}) {
  const getTreeWalkerNodeDisposition = useCallback(
    (node) => {
      if (node === rootRef?.current || canNodeReceiveFocus(node)) {
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    },
    [rootRef]
  );

  useEffect(() => {
    let trapContainerEl;

    if (isEnabled && rootRef.current) {
      trapContainerEl = rootRef.current;

      const treeWalker = document.createTreeWalker(
        trapContainerEl,
        NodeFilter.SHOW_ELEMENT,
        {
          acceptNode: getTreeWalkerNodeDisposition
        }
      );

      if (autoFocusElementRef) {
        const animationPromises = trapContainerEl
          .getAnimations({subtree: true})
          .map((animation) => animation.finished);
        Promise.allSettled(animationPromises).then(() => {
          const initialFocusNode =
            autoFocusElementRef.current ?? trapContainerEl;

          initialFocusNode.focus({
            focusVisible: true
          });

          // Point the `TreeWalker` instance's active node to the one the developer
          // passed in order to preserver tab order within the trap.
          treeWalker.currentNode = initialFocusNode;
        });
      } else if (
        trapContainerEl.contains(document.activeElement) &&
        getTreeWalkerNodeDisposition(document.activeElement) ===
          NodeFilter.FILTER_ACCEPT
      ) {
        // This covers the situation when a developer passes `autoFocusElement` as a
        // falsy value to prevent `useFocusTrap` from stealing initial focus from any
        // externally defined focus logic, e.g., an `autofocus` attribute on an element.
        // Point the `TreeWalker` instance's active node to one that was externally
        // focused to within the trap, e.g., one with an `autofocus` attribute.
        treeWalker.currentNode = document.activeElement;
      }

      const trap = createTrap(treeWalker);
      document.addEventListener("keydown", trap);

      function resetTreeWalkerHeadOnClick(e) {
        const target = e.target;

        if (canNodeReceiveFocus(target)) {
          // The user is clicking a focusable element within the trap, so
          // we need to ensure that their next `Tab` or `Shift` + `Tab`
          // keydown focuses to an element closest to the one just clicked.
          treeWalker.currentNode = target;
        } else {
          // The user is clicking a non-focusable element within the trap, so
          // we should reset the tab order sequence to start from the beginning.
          treeWalker.currentNode = trapContainerEl;
        }
      }

      trapContainerEl.addEventListener("mousedown", resetTreeWalkerHeadOnClick);

      return () => {
        document.removeEventListener("keydown", trap);
        trapContainerEl.removeEventListener(
          "mousedown",
          resetTreeWalkerHeadOnClick
        );
      };
    }
  }, [rootRef, autoFocusElementRef, isEnabled, getTreeWalkerNodeDisposition]);
}
