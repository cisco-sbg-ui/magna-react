import React from "react";

import {AFloatingBaseProps} from "../AFloatingBase/types";

export type ATriggerBaseProps = Omit<
  AFloatingBaseProps,
  "anchorRef" | "content"
> & {
  /**
   * Sets the element that the tooltip is anchored to
   */
  anchorRef?: React.RefObject<HTMLElement>;
  /**
   * Sets the element that triggers the tooltip
   */
  triggerRef?: React.RefObject<HTMLElement>;
  /**
   * Delay in milliseconds before tooltip will open
   *
   * @defaultValue `300`
   */
  openDelay?: number;
  /**
   * Delay in milliseconds before tooltip will close
   */
  closeDelay?: number;
  /**
   * Tooltip content
   */
  content?: React.ReactNode;
  /**
   * Disable the tooltip
   *
   * @defaultValue `false`
   */
  disabled?: boolean;
  /**
   * Callback for when the tooltip is shown
   */
  onShow?: (tooltipRef?: React.RefObject<HTMLElement>) => number | undefined;
  /**
   * Callback for when the tooltip is hidden
   */
  onHide?: () => void;
  /**
   * Wrap the children elements in a div to allow tooltips on
   * disabled elements.
   * @defaultValue `false`
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
   * Override the default max-width
   */
  maxWidth?: string;
  /**
   * Set the baseclass (a-tooltip, a-popover) for the trigger component
   */
  baseClass?: string;

  hideIfReferenceHidden?: boolean;
};
