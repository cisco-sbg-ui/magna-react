import {Override} from "../../types";

export type ATreeProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the ability to give an active state to tree nodes.
     */
    activatable?: boolean;
    /**
     * Toggles a lesser node height.
     */
    dense?: boolean;
    /**
     * Toggles the ability to click unknownwhere on the right side of the chevron, additionally, to expand.
     */
    expandOnClick?: boolean;
    /**
     * Toggles a visual hover state.
     */
    hoverable?: boolean;
    /**
     * Sets an array of items to display.
     */
    items?: Record<string, unknown>[];
    /**
     * Handles change events on the items array.
     */
    onChange?: (...args: unknown[]) => unknown;
  }
>;
