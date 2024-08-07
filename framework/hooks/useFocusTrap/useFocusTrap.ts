import {useCallback, useEffect} from "react";
import {
  canNodeReceiveFocus,
  isBackwardTab,
  isForwardTab
} from "../../utils/helpers";

type TreeWalkerNode = TreeWalker["currentNode"];

function createTrap(walker: TreeWalker) {
  return function trap(e: Event) {
    const isTabbingBack = isBackwardTab(e);
    const isTabbingForward = isForwardTab(e);

    if (!isTabbingBack && !isTabbingForward) {
      return;
    }

    e.preventDefault();

    const nextNode = isTabbingForward
      ? walker.nextNode()
      : walker.previousNode();

    const focusNode = (node: TreeWalkerNode) => {
      if (
        !(node instanceof HTMLElement) ||
        !(walker.root instanceof HTMLElement)
      ) {
        return;
      }

      if (walker.root.contains(node)) {
        // If the node is still in the DOM

        // @ts-expect-error `focusVisible` is experimental, but won't break anything if not supported
        node.focus({focusVisible: true});
      } else {
        // If the node is no longer in the DOM, for example
        // when the rendering changes and the reference is
        // detached - reset back to the root so tabs don't
        // stop working entirely.

        // @ts-expect-error `focusVisible` is experimental, but won't break anything if not supported
        walker.root.focus({focusVisible: false});
        walker.currentNode = walker.root;
      }
    };

    if (!nextNode) {
      // The user is at the end of the tree, so send focus
      // to the first child of parent node.
      walker.parentNode();
      walker.firstChild();
      focusNode(walker.currentNode);
    } else if (nextNode === walker.root) {
      // The user is at the top of the tree, so send focus
      // to the last child of parent node.
      walker.lastChild();
      focusNode(walker.currentNode);
    } else {
      // The user is tabbing within the parent node.
      focusNode(nextNode);
    }
  };
}

export default function useFocusTrap<
  TRoot extends HTMLElement,
  TFocusTarget extends HTMLElement
>({
  rootRef,
  isEnabled = true,
  autoFocusElementRef
}: {
  rootRef: React.RefObject<TRoot>;
  isEnabled: boolean;
  autoFocusElementRef?: React.RefObject<TFocusTarget>;
}) {
  const getTreeWalkerNodeDisposition = useCallback(
    (node: TreeWalkerNode) => {
      if (node === rootRef?.current || canNodeReceiveFocus(node)) {
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    },
    [rootRef]
  );

  useEffect(() => {
    let trapContainerEl: HTMLElement;

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
            // @ts-expect-error `focusVisible` is experimental, but won't break anything if not supported
            focusVisible: true
          });

          // Point the `TreeWalker` instance's active node to the one the developer
          // passed in order to preserver tab order within the trap.
          treeWalker.currentNode = initialFocusNode;
        });
      } else if (
        trapContainerEl.contains(document.activeElement) &&
        document.activeElement &&
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

      // eslint-disable-next-line no-inner-declarations
      function resetTreeWalkerHeadOnClick(e: Event) {
        const target = e.target;

        if (
          target &&
          target instanceof HTMLElement &&
          canNodeReceiveFocus(target)
        ) {
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
