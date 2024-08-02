import type {PolymorphicComponentPropWithRef} from "../../types";

export type AInlineInputBaseValue = string | number;

export type AInlineInputBaseProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "inputComponent",
    {
      /**
       * Props passed to the input component
       *
       * @defaultValue `{}`
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
       *
       * @defaultValue `false`
       */
      required?: boolean;
      /**
       * The input's `value` attribute.
       *
       * @defaultValue `""`
       */
      value?: AInlineInputBaseValue;
      /**
       * The input's `placeholder` attribute.
       *
       * @defaultValue `"..."`
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
       *
       * @defaultValue `false`
       */
      showTooltip?: boolean;
      /**
       * Pass props to the tooltip component
       */
      tooltipProps?: React.ComponentProps<C>;
    }
  >;
