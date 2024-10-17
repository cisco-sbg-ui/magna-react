import {Override, AAnchorRef, APlacement} from "../../types";

export type ATriggerTooltipTrigger = "hover" | "click";

export type AFloatingBaseProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * The reference to the tooltip anchor.
     */
    anchorRef: AAnchorRef;
    /**
     * Handles the request to close the menu.
     */
    onClose?: (...args: any[]) => unknown;
    /**
     * Toggles the `open` state.
     */
    open?: boolean;
    /**
     * The placement of the menu.
     */
    placement?: APlacement;
    /**
     * Set the offset between the anchor and the tooltip.
     */
    offset?: number;
    /**
     * Manually set the open and close animation duration
     */
    duration?: {
      open: number;
      close: number;
    };
    /**
     * Toggles the menu pointer.
     */
    pointer?: boolean;
    /**
     * Remove the offset between the anchor and the tooltip.
     */
    /**
     * Set if the tooltip can be interacted with
     */
    interactive?: boolean;
    /**
     * DOM event to trigger the tooltip
     */
    trigger?: ATriggerTooltipTrigger;
    /**
     * Ignore outside clicks - prevents usePopupQuickExit from firing when used
     * with drawers.
     *
     * @default true
     */
    ignoreOutsideClick?: boolean;
    /**
     * Hides the floating element automatically if the anchor element scrolls out of view
     *
     * @default true
     */
    hideIfReferenceHidden?: boolean;
    /**
     * By default the arrow aligns with the center of the tooltip. If this is set to true, the arrow will align with the side of the tooltip.
     */
    sideAlignArrow?: boolean;
    removeSpacer?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     *
     * @defaultValue `"menu"`
     */
    role?: React.AriaRole;

    "data-testid"?: string;
  }
>;
