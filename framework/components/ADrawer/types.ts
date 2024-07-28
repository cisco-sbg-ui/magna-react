import type {Override, PolymorphicComponentPropWithRef} from "../../types";
import {AModalProps} from "../AModal/types";

export type ADrawerPosition = "absolute" | "fixed" | "relative";

export type ADrawerSlideIn = "left" | "right" | "bottom";

export type ADrawerProps<C extends React.ElementType> = Override<
  AModalProps<C>,
  PolymorphicComponentPropWithRef<
    C,
    "as",
    {
      closeOnOutsideClick?: boolean;
      /**
       * Determines if the Drawer should render as a Modal.
       */
      asModal?: boolean;
      onClose: () => void;
      /**
       * String representing class names to be passed to drawer content container.
       * If rendering the drawer as a modal, it will still be passed to the drawer
       * panel content element.
       */
      className?: string;
      /**
       * Determines if the drawer is opened or closed. For a permanent
       * drawer, pass a constant value of `true`. An example of when this
       * might be useful is for a sidebar that toggles between its slim and
       * full version.
       */
      isOpen?: boolean;
      /**
       * The height of the drawer when it is opened. Most commonly used
       * when the drawer slides up from the bottom of the page.
       */
      openHeight?: string;
      /**
       * The width of the drawer when it is opened (assuming is is not
       * being rendered with the slim variant). If not specified, defaults
       * to 400px.
       */
      openWidth?: string;
      /**
       * Specifies the positioning strategy of the drawer. A drawer specified with
       * "fixed" is useful when the drawer should take up the entire page and cover
       * adjacent content. A drawer specified with absolute is useful when the drawer
       * should be contained within a parent container (so not the entire viewport), but
       * still cover adjacent content as it opens. A drawer specified as relative is
       * useful when the drawer should be contained within a parent, but _not_ cover
       * its adjacent content, i.e., push its adjacent content aside dynamically.
       */
      position?: ADrawerPosition;
      /**
       * The direction in which the drawer should slide-in from.
       */
      slideIn?: ADrawerSlideIn;
      /**
       * Determines if the drawer should render as a smaller size. The default
       * is 50px, but you can update this using a maxWidth CSS property on the drawer
       * (either via. style prop or a custom class).
       */
      slim?: boolean;
      /**
       * The width of the drawer when it is rendered as slim. If not specified,
       * it defaults to 50px.
       */
      slimWidth?: string;
      /**
       * Option for close button title instead of default icon
       * @deprecated
       */
      closeTitle?: string;

      style?: React.CSSProperties;
    }
  >
>;
