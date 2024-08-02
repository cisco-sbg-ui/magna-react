import {AAnchorRef, APlacement, Override} from "../../types";
import {APanelProps} from "../APanel/types";

export type APopoverAnchorRef =
  | ((...args: unknown[]) => unknown)
  | {
      current?: unknown;
    }
  | {
      x?: number;
      y?: number;
      width?: number;
      height?: number;
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };

export type APopoverProps<C extends React.ElementType> = Override<
  APanelProps<C>,
  {
    /**
     * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
     */
    anchorRef: AAnchorRef;
    /**
     * Toggles the behavior of focusing the menu on open.
     *
     * @defaultValue `true`
     */
    focusOnOpen?: boolean;
    /**
     * Handles the request to close the menu.
     */
    onClose?: (...args: unknown[]) => unknown;
    /**
     * Toggles the `open` state.
     */
    open?: boolean;
    /**
     * The placement of the menu.
     */
    placement?: APlacement;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     *
     * @defaultValue `"menu"`
     */
    role?: React.AriaRole;
  }
>;
