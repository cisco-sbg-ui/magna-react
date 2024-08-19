import {PolymorphicComponentPropWithRef} from "../../types";

export type ATagProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      small?: boolean;
      large?: boolean;
      href?: string;
      target?: string;
      /**
       * Will apply score specific background and font color.
       */
      score?: number;
      /**
       * Will apply the icon along with the status color.
       */
      status?:
        | "active"
        | "allow"
        | "deny"
        | "disabled"
        | "excellent"
        | "inactive"
        | "info"
        | "in-progress"
        | "low-warning"
        | "negative"
        | "positive"
        | "severe-warning"
        | "warning";
      /**
       * Optional accent colors
       */
      color?:
        | "accentA"
        | "accentB"
        | "accentC"
        | "accentD"
        | "accentE"
        | "accentF"
        | "accentG"
        | "accentH"
        | "accentI"
        | "accentK";
      /**
       * Option for custom icon, can pass through children or directly into props
       *
       * @defaultValue `false`
       */
      customIcon?: boolean | React.ReactNode;
      "data-testid"?: string;
    }
  >;
