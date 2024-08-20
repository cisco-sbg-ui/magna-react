import type {Override, PolymorphicComponentPropWithRef} from "../../types";

export type ACardBasicState =
  | "dormant"
  | "positive"
  | "warning"
  | "negative"
  | "informational"
  | "disabled"
  | "custom";

export type ACardBasicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Sets the card state color.
       * It reflects the colors of the magnetic design states "dormant", "positive", "warning", "negative", "informational" and "disabled".
       * Value "custom" sets the state color from "stateCustomColor" property.
       */
      state?: ACardBasicState;
      /**
       * If the card state is set to "custom", the state color will be set to this value. Color value can be unknown of the legal CSS color values.
       * example: stateCustomColor="#F2638C"
       */
      stateCustomColor?: string;
      /**
       * This sets the shadow on the card
       *
       * @defaultValue `false`
       */
      lifted?: boolean;
      /**
       * Sets the card to interactive, adding hover and focus styling.
       *
       * @defaultValue `false`
       */
      interactive?: boolean;
      type?: "dialog" | "card";
      /**
       * Indicates the card is selected
       */
      selected?: boolean;
    }
  >;

export type ACardContainerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "component",
    {
      /**
       * Removes the shadow from the card container.
       *
       * @defaultValue `false`
       */
      flat?: boolean;
    }
  >;

export type ACardContentProps = React.ComponentPropsWithRef<"div">;

export type ACardFooterProps = React.ComponentPropsWithRef<"div">;

export type ACardHeaderProps = React.ComponentPropsWithRef<"div">;

export type ACardItemAttached = "left" | "right" | "horizontal";

export type ACardItemProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Item will fill in the remaining width
     *
     * @defaultValue `false`
     */
    stretched?: boolean;
    /**
     * Removes indentation
     * "left": from the left
     * "right": from the right
     * "horizontal": from both sides
     */
    attached?: ACardItemAttached;
  }
>;

export type ACardSubTitleProps = React.ComponentPropsWithRef<"div">;

export type ACardTitleProps = React.ComponentPropsWithRef<"div">;
