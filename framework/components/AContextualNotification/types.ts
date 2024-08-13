import type {PolymorphicComponentPropWithRef} from "../../types";

export type AContextualNotificationVariant =
  | "success"
  | "info"
  | "warning"
  | "danger";

export type AContextualNotificationProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Sets the display variant.
       *
       * @defaultValue `"info"`
       */
      variant?: AContextualNotificationVariant;
    }
  >;
