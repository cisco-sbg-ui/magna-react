import type {PolymorphicComponentPropWithRef} from "../../types";

export type AMountProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Sets the class name for the wrapper container.
       */
      wrapClassName?: string;
      /**
       * Creates a new boundary for any children that render inside the container.
       */
      withNewWrappingContext?: boolean;
    }
  >;
