import type {Override, PolymorphicComponentPropWithRef} from "../../types";

export type APanelType = "default" | "grey" | "white" | "dialog";

export type APanelProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Display a style variant.
       */
      type?: APanelType;
      /**
       * Hide the panel border
       */
      borderless?: boolean;
    }
  >;

export type APanelBodyProps = React.ComponentPropsWithRef<"div">;

export type APanelFooterProps = React.ComponentPropsWithRef<"div">;

export type APanelHeaderProps = React.ComponentPropsWithRef<"div">;

export type APanelTitleProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles reduced text size.
     */
    small?: boolean;
  }
>;
