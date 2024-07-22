import {Override} from "../../types";

export type AToastPlacement = "bottom-right" | "top" | "top-right";

export type AToastLevel = "info" | "success" | "warning" | "danger";

export type AToastProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the close button.
     */
    dismissible?: boolean;
    /**
     * Specifies the display variant.
     */
    level?: AToastLevel;
    /**
     * A callback for handling the close event.
     */
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => unknown;
    /**
     * Specifies the placement of the toast.
     */
    placement?: AToastPlacement;
    /**
     * Sets the title.
     */
    title?: React.ReactNode;
  }
>;
