import React from "react";
import {PolymorphicComponentPropWithRef} from "../../types";

export type ATagProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      small?: boolean;
      large?: boolean;
      /**
       * Will apply the icon along with the status color.
       */
      status?:
        | "active"
        | "alert"
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
      /**
       * Hide the status icon
       */
      hideStatusIcon?: boolean;
      "data-testid"?: string;
      /**
       * Set the tag to be a link
       */
      href?: string;
      /**
       * Set the target of the link
       */
      target?: string;
      /**
       * Make the tag interactive. Sets both `onClick` and `onKeyDown`. By default this changes
       * the ATag root HTML element to a button.
       *
       */
      onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
      /**
       * Overrides the default keydown behavior when `onClick` is set.
       *
       */
      onKeyDown?: React.EventHandler<React.KeyboardEvent>;
    }
  >;
