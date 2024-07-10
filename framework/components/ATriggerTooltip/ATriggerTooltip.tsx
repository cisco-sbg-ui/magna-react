import React, {useCallback, useEffect, useRef} from "react";

import {ATooltip} from "../ATooltip";
import useEscapeKeydown from "../../hooks/useEscapeKeydown/useEscapeKeydown";
import useToggle from "../../hooks/useToggle/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import {handleMultipleRefs} from "../../utils/helpers";
import {ATriggerTooltipTrigger} from "./types";
import {APlacement} from "../../types";

interface ATriggerTooltipProps {
  /**
   * DOM event to trigger the tooltip
   */
  trigger?: ATriggerTooltipTrigger;
  /**
   * Anchors the tooltip to the specified ref, leaving
   * trigger event on the child(ren).
   */
  anchorRef?: React.RefObject<HTMLElement>;
  /**
   * Sets the element that triggers the tooltip
   */
  triggerRef?: React.RefObject<HTMLElement>;
  /**
   * Delay in milliseconds before tooltip will open
   */
  openDelay?: number;
  /**
   * Delay in milliseconds before tooltip will close
   */
  closeDelay?: number;
  /**
   * On close callback
   */
  onClose?: () => void;
  /**
   * Tooltip content
   */
  content?: React.ReactNode;
  /**
   * Disable the tooltip
   */
  disabled?: boolean;
  /**
   * Wrap the children elements in a div to allow tooltips on
   * disabled elements.
   */
  wrapChildren?: boolean;
  /**
   * Pass a class to the child wrapper.
   */
  wrapperClass?: string;
  /**
   * Only show tooltip if the anchor element is truncated
   */
  onlyIfTruncated?: boolean;
  /**
   * Allow hovering on tooltip for interactive elements
   */
  interactive?: boolean;
  children?: React.ReactNode;
  placement?: APlacement;
  style?: React.CSSProperties;
}

const ATriggerTooltip = ({
  children,
  anchorRef,
  triggerRef,
  trigger = "hover",
  openDelay = 400,
  closeDelay,
  onClose,
  content,
  disabled = false,
  wrapChildren = false,
  wrapperClass,
  onlyIfTruncated,
  interactive,
  ...rest
}: ATriggerTooltipProps) => {
  const childrenRef = useRef<HTMLElement[]>([]);
  const childrenRefCurrent = childrenRef.current;
  const firstChildRef = {current: childrenRefCurrent[0]};
  // If an anchorRef is provided, use it. Otherwise, attach to first child.
  const tooltipAnchorRef = anchorRef || triggerRef || firstChildRef;
  const tooltipRef = useRef<HTMLElement>(null);

  const checkForTruncation = useCallback(() => {
    if (!onlyIfTruncated) {
      return true;
    }

    const element = anchorRef?.current || childrenRef.current[0];

    if (!element) {
      return true;
    }

    return (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    );
  }, [onlyIfTruncated, anchorRef, childrenRef]);

  const {
    isOpen,
    open,
    close: toggleClose,
    toggle
  } = useToggle(openDelay, closeDelay, checkForTruncation);

  const close = useCallback(() => {
    const hoveringTooltip = tooltipRef?.current?.matches(":hover");
    if (interactive && hoveringTooltip) {
      return;
    }

    toggleClose();

    onClose && onClose();
  }, [toggleClose, onClose, interactive]);

  useOutsideClick({
    isEnabled: triggerRef && triggerRef.current && trigger === "click",
    rootRef: triggerRef,
    onClick: close
  });

  useEscapeKeydown({isEnabled: open, onKeydown: close});

  useEffect(() => {
    if (!content || disabled) {
      return;
    }

    const childRefs =
      triggerRef && triggerRef.current
        ? [triggerRef.current]
        : childrenRefCurrent;

    switch (trigger) {
      case "hover":
        childRefs.forEach((childRef) => {
          childRef.addEventListener("focusin", open);
          childRef.addEventListener("focusout", close);
          childRef.addEventListener("mouseenter", open);
          childRef.addEventListener("mouseleave", close);
        });
        break;
      case "click":
        childRefs.forEach((childRef) => {
          childRef.addEventListener("click", toggle);
        });
        break;
    }

    return () => {
      childRefs.forEach((childRef) => {
        if (!childRef) {
          return;
        }
        childRef.removeEventListener("focusin", open);
        childRef.removeEventListener("focusout", close);
        childRef.removeEventListener("mouseenter", open);
        childRef.removeEventListener("mouseleave", close);
        childRef.removeEventListener("click", toggle);
      });
    };
  }, [
    trigger,
    childrenRefCurrent,
    triggerRef,
    close,
    open,
    toggle,
    disabled,
    content
  ]);

  useEffect(() => {
    if (!interactive) {
      return;
    }

    const tooltip = tooltipRef?.current;

    const leave = () => {
      const hoveringAnchor = tooltipAnchorRef?.current?.matches(":hover");

      if (!hoveringAnchor) {
        close();
      }
    };

    tooltip?.addEventListener("mouseleave", leave);

    return () => {
      tooltip?.removeEventListener("mouseleave", leave);
    };
  }, [tooltipRef, tooltipAnchorRef, interactive, close]);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return;
        }
        const toClone: React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        > = wrapChildren ? (
          <div
            className={wrapperClass}
            style={{height: "fit-content", width: "fit-content"}}>
            {child}
          </div>
        ) : (
          child
        );

        return React.cloneElement(toClone, {
          ...toClone?.props,
          ref: handleMultipleRefs(toClone.props.ref, (node: HTMLElement) => {
            childrenRef.current[index] = node;
          })
        });
      })}
      {!disabled && (
        <ATooltip
          ref={tooltipRef}
          anchorRef={tooltipAnchorRef}
          open={isOpen}
          onClose={close}
          pointer
          {...rest}>
          {content}
        </ATooltip>
      )}
    </>
  );
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
