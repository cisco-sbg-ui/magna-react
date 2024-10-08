import React, {useCallback, useEffect, useRef} from "react";

import useEscapeKeydown from "../../hooks/useEscapeKeydown/useEscapeKeydown";
import useToggle from "../../hooks/useToggle/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import {handleMultipleRefs} from "../../utils/helpers";

import AFloatingBase from "../AFloatingBase/AFloatingBase";
import "../ATooltip/ATooltip.scss";

import {ATriggerTooltipProps} from "./types";

const ATriggerTooltip = ({
  children,
  className: propsClassName,
  anchorRef,
  triggerRef,
  trigger = "hover",
  openDelay = 300,
  closeDelay,
  onClose,
  content,
  onlyIfTruncated,
  disabled = false,
  wrapChildren = false,
  wrapperClass,
  interactive,
  placement = "top",
  style: propsStyle,
  maxWidth,
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
    const tooltipHover = tooltipRef?.current?.matches(":hover");

    if (interactive && tooltipHover) {
      return;
    }

    toggleClose();

    onClose && onClose();
  }, [toggleClose, onClose, interactive, tooltipRef]);

  useOutsideClick({
    isEnabled:
      ((triggerRef && triggerRef.current) ||
        (tooltipAnchorRef && tooltipAnchorRef.current)) &&
      trigger === "click",
    rootRef: triggerRef || tooltipAnchorRef,
    onClick: close
  });

  useEscapeKeydown({isEnabled: isOpen, onKeydown: close});

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
    content,
    interactive
  ]);

  let className = "a-tooltip";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  const style: React.CSSProperties = {
    ...propsStyle
  };

  if (maxWidth) {
    style.maxWidth = maxWidth;
  }

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return;
        }
        const toClone: React.FunctionComponentElement<any> = wrapChildren ? (
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
          ref: handleMultipleRefs(toClone.ref, (node: HTMLElement) => {
            childrenRef.current[index] = node;
          })
        });
      })}
      {!disabled && (
        <AFloatingBase
          ref={tooltipRef}
          anchorRef={tooltipAnchorRef}
          interactive={interactive}
          trigger={trigger}
          open={isOpen}
          className={className}
          style={style}
          placement={placement}
          onClose={close}
          {...rest}>
          {content}
        </AFloatingBase>
      )}
    </>
  );
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
