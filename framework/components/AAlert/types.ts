import {Override} from "../../types";

export type AAlertLevel = "info" | "success" | "warning" | "danger";

export type AAlertProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the close button.
     */
    dismissible?: boolean;
    /**
     * DEPRECATED VERSION OF DISMISSIBLE PROP.
     */
    dismissable?: boolean;
    /**
     * Specifies the display variant.
     */
    level?: AAlertLevel;
    /**
     * A callback for handling the close event.
     */
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * Unset default width: 100% on the alert.
     */
    fitContentWidth?: boolean;
  }
>;
