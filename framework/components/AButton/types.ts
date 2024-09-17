import type {PolymorphicComponentPropWithRef} from "../../types";

export type AButtonType = "button" | "submit" | "reset";

export type AButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Toggles the `disabled` state.
       *
       * @defaultValue `false`
       */
      disabled?: boolean;
      /**
       * If specified, the component will render as an HTML link.
       */
      href?: string;
      /**
       * Signifies an icon-only button. Note* If using icon with text, adding the `icon` prop in not necessary.
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
       *
       * @defaultValue `"button"`
       */
      type?: AButtonType;
      /**
       * Destructive - button for destructive action, should be used with confirm dialog/modal when clicked
       *
       *  @defaultValue `false`
       */
      destructive?: boolean;
      /**
       * Apply Magnetic small size styles vs only re-skin styles
       *
       * @defaultValue `false`
       */
      small?: boolean;
      /**
       * Apply Magnetic medium size styles vs only re-skin styles.
       *
       * @defaultValue `true`
       */
      medium?: boolean;
      /**
       * Automatically add a loading spinner to the button
       *
       * @defaultValue `false`
       */
      loading?: boolean;
      /**
       * Removes padding on any button
       *
       * @defaultValue `false`
       */
      noPadding?: boolean;
      /**
       * Applies dropdown icon style
       *
       * @defaultValue `false`
       */
      dropdown?: boolean;
      /**
       * Required with dropdown prop to toggle dropdown icon
       *
       * @defaultValue `false`
       */
      /**
       *
       * Toggles the `floating` style variant.
       *
       * @defaultValue `false`
       */
      floating?: boolean;
      open?: boolean;
      onClick?: React.MouseEventHandler;
      "data-testid"?: string;
    }
  >;
