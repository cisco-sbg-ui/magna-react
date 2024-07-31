import type {PolymorphicComponentPropWithRef} from "../../types";

export type AInlineInputBaseValue = string | number;

export type AInlineInputBaseProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "inputComponent",
    {
      /**
       * Props passed to the input component
       */
      inputComponentProps?: React.ComponentProps<C>;
      /**
       * Clears the input value.
       */
      clearable?: boolean;
      /**
       * Toggles the `disabled` state.
       */
      disabled?: boolean;
      /**
       * Sets `required` on the input, and makes the value required
       */
      required?: boolean;
      /**
       * The input's `value` attribute.
       */
      value?: AInlineInputBaseValue;
      /**
       * The input's `placeholder` attribute.
       */
      placeholder?: string;
      /**
       * Handles the `change` event.
       */
      onChange?: (...args: string[]) => unknown;
      /**
       * Sets widget size to magnetic large
       */
      large?: boolean;
      /**
       * Sets widget size to magnetic medium (default)
       */
      medium?: boolean;
      /**
       * Sets widget size to magnetic small
       */
      small?: boolean;
      /**
       * Show a tooltip on the displayed value
       */
      showTooltip?: boolean;
    }
  >;
