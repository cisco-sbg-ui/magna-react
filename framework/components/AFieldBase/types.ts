import {Override} from "../../types";
import {ATooltipProps} from "../ATooltip";

export type AFieldBaseValidationState = "default" | "warning" | "danger";

export type AHintsType =
  | Array<AFieldBaseHint>
  | AFieldBaseHint
  | React.ReactNode;

export interface AFieldBaseHint {
  /**
   * Hint content.
   */
  content: React.ReactNode;
  /**
   * Style the hint with the component validation state. Default: false.
   */
  hintUsesValidationState?: boolean;
  /**
   * Override the validation state of the hint by incorporating the desired state.
   * The component validation state is disregarded when this property is configured.
   */
  validationStateOverride?: AFieldBaseValidationState;
}

export type AFieldBaseProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * The label's `for` attribute.
     */
    labelFor?: string;
    /**
     * The label's `id` attribute.
     */
    labelId?: string;
    /**
     * Adds required asterisk next to label
     */
    required?: boolean;
    /**
     * Adds an information tooltip next to the label
     */
    infoTooltip?: string;
    /**
     * Overrides props of `ATooltip` used to display `infoTooltip`. See `ATooltip.propTypes`.
     */
    infoTooltipProps?: ATooltipProps;
    /**
     * Handles the label's `click` event.
     */
    onClickLabel?: (...args: unknown[]) => unknown;
    /**
     * Applies a validation state.
     */
    validationState?: AFieldBaseValidationState;
  }
>;
