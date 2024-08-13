import {ComponentPropsWithRef, type ElementType} from "react";
import type {Override, PolymorphicComponentPropWithRef} from "../../types";
import {AModalProps} from "../AModal/types";
import {AButtonProps} from "../AButton/types";

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
       *
       *   @defaultValue `"fixed"`
       */
      position?: ADrawerPosition;
      /**
       * The direction in which the drawer should slide-in from.
       *
       *  @defaultValue `"left"`
       */
      slideIn?: ADrawerSlideIn;
      /**
       * Determines if the drawer should render as a smaller size. The default
       * is 50px, but you can update this using a maxWidth CSS property on the drawer
       * (either via. style prop or a custom class).
       *
       *  @defaultValue `false`
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
      /**
       * TODO needs description
       *  @defaultValue `true`
       */
      withTransitions?: boolean;
      /**
       * When using the `useDrawerToggle` hook, set this to true. This allows the current
       * children to remain visible while the drawer is sliding out, and the new children
       * to show when the drawer slides back in.
       *
       * This is a manual open to avoid interference with other drawer management code.
       *  @defaultValue `false`
       */
      usesDrawerToggleHook?: boolean;

      style?: React.CSSProperties;
    }
  >
>;

export type ADrawerHeaderProps = Override<
  ComponentPropsWithRef<"div">,
  {
    /**
     * String representing class names to be passed to drawer content container.
     * If rendering the drawer as a modal, it will still be passed to the drawer
     * panel content element.
     */
    className?: string;
    /**
     * Adds a divider below the header content
     *
     * @defaultValue `false`
     */
    divider?: boolean;
  }
>;

export type ADrawerFooterVariant = "shadow" | "divider";

export type ADrawerFooterProps = Override<
  ComponentPropsWithRef<"div">,
  {
    /**
     * String representing class names to be passed to drawer content container.
     * If rendering the drawer as a modal, it will still be passed to the drawer
     * panel content element.
     */
    className?: string;
    /**
     * Replace the default box shadow with an ADivider above the footer
     *
     * @defaultValue `"shadow"`
     */
    variant?: ADrawerFooterVariant;
    /**
     * Wrap the component children in an ADrawerContent element
     *
     * @defaultValue `true`
     */
    withPadding?: boolean;
  }
>;

export type ADrawerBodyProps = Override<
  ComponentPropsWithRef<"div">,
  {
    /**
     * String representing class names to be passed to drawer content container.
     * If rendering the drawer as a modal, it will still be passed to the drawer
     * panel content element.
     */
    className?: string;
    /**
     * Wrap the component children in an ADrawerContent element
     */
    withPadding?: boolean;
  }
>;

export type ADrawerContentProps = React.ComponentPropsWithRef<"div">;

export type ADrawerSubtitleProps = Override<
  ComponentPropsWithRef<"div">,
  {
    /**
     * String representing class names to be passed to drawer content container.
     * If rendering the drawer as a modal, it will still be passed to the drawer
     * panel content element.
     */
    className?: string;
  }
>;

export type ADrawerTitleProps<C extends ElementType> = Override<
  ComponentPropsWithRef<"div">,
  {
    /**
     * String representing class names to be passed to drawer content container.
     * If rendering the drawer as a modal, it will still be passed to the drawer
     * panel content element.
     */
    className?: string;
    /**
     * Option for close button title instead of default icon
     */
    closeTitle?: string;
    /**
     * Any additional props for close button
     */
    closeBtnProps?: AButtonProps<C> | AButtonProps<C>[];

    sticky?: boolean;
  }
>;
