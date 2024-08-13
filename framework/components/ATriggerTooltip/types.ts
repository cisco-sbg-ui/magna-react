import {APlacement, Override} from "../../types";
import {ATooltipProps} from "../ATooltip/types";

export type ATriggerTooltipTrigger = "hover" | "click";

export type ATriggerTooltipProps = Override<
  ATooltipProps,
  {
    /**
     * DOM event to trigger the tooltip
     *
     * @defaultValue `"hover"`
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
     *
     * @defaultValue `400`
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
     *
     * @defaultValue `false`
     */
    disabled?: boolean;
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
     * Allow hovering on tooltip for interactive elements
     */
    interactive?: boolean;
    children?: React.ReactNode;
    placement?: APlacement;
    style?: React.CSSProperties;
  }
>;
