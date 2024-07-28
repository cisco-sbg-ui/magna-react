import {Override} from "../../types";

export type AHintValidationState = "default" | "warning" | "danger";

export type AHintProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets the hint content.
     */
    hint?: React.ReactNode;
    /**
     * Applies a validation state.
     */
    validationState?: AHintValidationState;
  }
>;
