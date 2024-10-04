import {Override} from "../../types";

export type AToastPlacement = "bottom-right" | "top" | "top-right";

/*
 * @deprecated "danger" level is deprecated
 */
export type AToastLevel = "info" | "success" | "warning" | "danger";

export type AToastProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the close button.
     *
     * @defaultValue `true`
     */
    dismissible?: boolean;
    /**
     * DEPRECATED VERSION OF DISMISSIBLE PROP.
     *
     * @deprecated Use correct spelling of `dismissible` instead.
     */
    dismissable?: boolean;
    /**
     * Specifies the display variant.
     *
     *  @defaultValue `"info"`
     */
    level?: AToastLevel;
    /**
     * A callback for handling the close event.
     */
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => unknown;
    /**
     * Specifies the placement of the toast.
     *
     * @defaultValue `"top-right"`
     */
    placement?: AToastPlacement;
    /**
     * Sets the title.
     */
    title?: React.ReactNode;
  }
>;
