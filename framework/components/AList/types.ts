import type {Override, PolymorphicComponentPropWithRef} from "../../types";

export type AListProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Toggles the hover visualization on list items.
       *
       * @defaultValue `true`
       */
      hoverable?: boolean;
      /**
       * Magnetic medium size variant
       */
      medium?: boolean;
      /** Set the ARIA role */
      role?: React.AriaRole;
      /**
       * A callback for handling the click event.
       */
      onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
      /**
       * A callback for handling the close.
       */
      onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
      /**
       * A callback for handling the keydown event.
       */
      onKeyDown?: (e: React.KeyboardEvent) => void;

      style?: React.CSSProperties;
    }
  >;

export type AListItemProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * If specified, the component will render as an HTML link.
       */
      href?: string;
      /**
       * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
       * If the role is not set, the component may infer this.
       */
      role?: React.AriaRole;
      /**
       * A callback for handling the click event.
       */
      onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
      /**
       * Toggles the `selected` state.
       */
      selected?: boolean;
      /**
       * Gives list item submenu behavior and styling
       */
      submenu?: boolean;
      /**
       * Toggles the `disabled` state.
       */
      disabled?: boolean;
      /**
       * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
       */
      target?: string;
      /**
       * Toggles whether the list item has more than one line of text.
       */
      twoLine?: boolean;
    }
  >;

export type AListItemActionProps = React.ComponentPropsWithRef<"div">;

export type AListItemAvatarProps = React.ComponentPropsWithRef<"div">;

export type AListItemContentProps = React.ComponentPropsWithRef<"div">;

export type AListItemDividerProps = React.ComponentPropsWithRef<"div">;

export type AListItemGroupProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets the title for the group, string or other component
     */
    title?: React.ReactNode;
  }
>;

export type AListItemSubtitleProps = React.ComponentPropsWithRef<"div">;

export type AListItemTitleProps = React.ComponentPropsWithRef<"div">;
