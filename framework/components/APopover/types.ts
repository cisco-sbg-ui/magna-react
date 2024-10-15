import {ADOMRect, ARef} from "../../types";
import {AFloatingBaseProps} from "../AFloatingBase/types";

export type APopoverAnchorRef =
  | ((...args: unknown[]) => unknown)
  | ARef
  | ADOMRect;

export type APopoverProps = Omit<AFloatingBaseProps, "anchorRef"> & {
  /**
   * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
   */
  anchorRef: APopoverAnchorRef;
  /**
   * Toggles the behavior of focusing the menu on open.
   *
   * @defaultValue `true`
   */
  focusOnOpen?: boolean;
  hideIfReferenceHidden?: boolean;
};
