import {Override} from "../../types";

export type AAlertLevel = "info" | "success" | "warning" | "danger";

export type AAlertProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the close button.
     * @defaultValue `true`
     */
    dismissible?: boolean;
    /**
     * DEPRECATED VERSION OF DISMISSIBLE PROP.
     * @deprecated Use correct spelling of `dismissible` instead.
     */
    dismissable?: boolean;
    /**
     * Specifies the display variant.
     *
     * @defaultValue `"info"`
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
