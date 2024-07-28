import {Override} from "../../types";
import {AContextualNotificationProps} from "../AContextualNotification/types";

export type AContextualNotificationMenuAnchorRef =
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

export type AContextualNotificationMenuPlacement =
  | "top"
  | "top-right"
  | "right-top"
  | "right"
  | "right-bottom"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left-bottom"
  | "left"
  | "left-top"
  | "top-left";

export type AContextualNotificationMenuVariant =
  | "success"
  | "info"
  | "warning"
  | "danger";

export type AContextualNotificationMenuProps<C extends React.ElementType> =
  Override<
    AContextualNotificationProps<C>,
    {
      /**
       * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
       */
      anchorRef: AContextualNotificationMenuAnchorRef;
      /**
       * Toggles the behavior of focusing the menu on open.
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
      placement?: AContextualNotificationMenuPlacement;
      /**
       * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
       */
      role?: React.AriaRole;
      /**
       * Sets the display variant.
       */
      variant?: AContextualNotificationMenuVariant;
    }
  >;
