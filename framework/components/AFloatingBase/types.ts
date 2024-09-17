import {Override, APlacement} from "../../types";

export type ATriggerTooltipTrigger = "hover" | "click";

export type AFloatingBaseProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * The reference to the tooltip anchor.
     */
    anchorRef: React.RefObject<HTMLElement>;
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
