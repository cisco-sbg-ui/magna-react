import {Override, AAnchorRef, APlacement} from "../../types";
import {AMenuBaseProps} from "../AMenuBase/types";

export type ATooltipProps = Override<
  AMenuBaseProps,
  {
    /**
     * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
     */
    anchorRef: AAnchorRef;
    /**
     * Handles the request to close the menu.
     */
    onClose?: () => void;
    /**
     * Toggles the `open` state.
     */
    open?: boolean;
    /**
     * The placement of the menu.
     */
    placement?: APlacement;
    /**
     * Toggles the menu pointer.
     */
    pointer?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     */
    role?: React.AriaRole;
    /**
     * Override the default max-width
     */
    maxWidth?: string;
    style?: React.CSSProperties;
  }
>;
