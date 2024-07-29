import type {PolymorphicComponentPropWithRef} from "../../types";

export type AButtonType = "button" | "submit" | "reset";

export type AButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Toggles the `disabled` state.
       */
      disabled?: boolean;
      /**
       * If specified, the component will render as an HTML link.
       */
      href?: string;
      /**
       * Signifies an icon-only button.
       */
      icon?: boolean;
      /**
       * Toggles the `primary` style variant. If no style variant is chosen, `primary` is applied.
       */
      primary?: boolean;
      /**
       * Toggles the `secondary` style variant.
       */
      secondary?: boolean;
      /**
       * If the `href` or `component` props is set, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
       */
      target?: string;
      /**
       * Toggles the `tertiary` style variant.
       */
      tertiary?: boolean;
      /**
       * Toggles the `tertiaryAlt` style variant.
       */
      tertiaryAlt?: boolean;
      /**
       * The button type.
       */
      type?: AButtonType;
      /**
       * Destructive - button for destructive action, should be used with confirm dialog/modal when clicked
       */
      destructive?: boolean;
      /**
       * Apply Magnetic small size styles vs only re-skin styles, defaults to false
       */
      small?: boolean;
      /**
       * Apply Magnetic medium size styles vs only re-skin styles, defaults to false
       */
      medium?: boolean;
      /**
       * Automatically add a loading spinner to the button
       */
      loading?: boolean;
      onClick?: React.MouseEventHandler;
      "data-testid"?: string;
    }
  >;