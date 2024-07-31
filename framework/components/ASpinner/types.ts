import type {PolymorphicComponentPropWithRef} from "../../types";

export type ASpinnerSize = "small" | "medium" | "large" | "extra-large";

export type ASpinnerLabelAlignment = "bottom" | "right";

export type ASpinnerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Sets the spinner size.
       * The default spinner size is set to "medium".
       */
      size?: ASpinnerSize;
      /**
       * Sets how the label will be displayed.
       * The default label alignment is set to "right".
       */
      labelAlignment?: ASpinnerLabelAlignment;
      /**
       * If stopped is set to true, the spinner will not be animated.
       */
      stopped?: boolean;
      className?: string;
    }
  >;
