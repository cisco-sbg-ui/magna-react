import type {PolymorphicComponentPropWithRef} from "../../types";

export type ATabProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * If specified, the component will render as an HTML link.
       */
      href?: string;
      /**
       * Toggles the `selected` state in controlled mode. Provides the default `selected` state in uncontrolled mode.
       */
      selected?: boolean;
      /**
       * Supplies an identifier to the tab for the purpose of being leveraged by the developer in controlled mode. If absent, uncontrolled mode is assumed.
       */
      tabKey?: string;
      /**
       * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
       */
      target?: string;
    }
  >;
