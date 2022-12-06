import {forwardRef} from "react";
import PropTypes from "prop-types";

import AModal from "../AModal/AModal";

import "./ADrawer.scss";

const ADrawer = forwardRef(
  (
    {
      as,
      asModal = true,
      className: propsClassName,
      children,
      openWidth,
      isOpen,
      position = "fixed",
      slideIn = "left",
      slim = false,
      slimWidth,
      style: propsStyle,
      ...rest
    },
    ref
  ) => {
    const DrawerPanelComponent = as || "div";
    const orientation =
      slideIn === "bottom" || slideIn === "top" ? "horizontal" : "vertical";
    let className = `a-drawer a-drawer--${orientation} a-drawer--${position} a-drawer--${slideIn}`;
    const style = {...propsStyle};

    if (slim) {
      className += ` a-drawer--slim`;

      if (slimWidth) {
        style.width = slimWidth;
        style.maxWidth = slimWidth;
      }
    }
    if (!isOpen) {
      className += ` a-drawer--hidden`;
    } else if (!slim && openWidth) {
      style.width = openWidth;
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    // Our CSS is defaulted to 400px. If a
    // width prop is passed in, that should
    // always take precedence.
    if (openWidth) {
      style.maxWidth = openWidth;
    }
    if (slimWidth && slim) {
      style.maxWidth = slimWidth;
    }

    if (!asModal) {
      return (
        <DrawerPanelComponent
          {...rest}
          isOpen={isOpen}
          ref={ref}
          className={className}
          style={style}
        >
          {children}
        </DrawerPanelComponent>
      );
    }

    return (
      <AModal isOpen={isOpen} {...rest}>
        <DrawerPanelComponent
          {...rest}
          isOpen={isOpen}
          ref={ref}
          className={className}
          style={style}
        >
          {children}
        </DrawerPanelComponent>
      </AModal>
    );
  }
);

ADrawer.propTypes = {
  /**
   * Sets the base component.
   */
  as: PropTypes.elementType,

  /**
   * Determines if the Drawer should render as a Modal.
   */
  asModal: PropTypes.bool,

  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string,

  /**
   * Determines if the drawer is opened or closed. For a permanent
   * drawer, pass a constant value of `true`. An example of when this
   * might be useful is for a sidebar that toggles between its slim and
   * full version.
   */
  isOpen: PropTypes.bool,

  /**
   * The width of the drawer when it is opened (assuming is is not
   * being rendered with the slim variant). If not specified, defaults
   * to 400px.
   */
  openWidth: PropTypes.string,

  /**
   * Specifies the positioning strategy of the drawer. A drawer specified with
   * "fixed" is useful when the drawer should take up the entire page and cover
   * adjacent content. A drawer specified with absolute is useful when the drawer
   * should be contained within a parent container (so not the entire viewport), but
   * still cover adjacent content as it opens. A drawer specified as relative is
   * useful when the drawer should be contained within a parent, but _not_ cover
   * its adjacent content, i.e., push its adjacent content aside dynamically.
   */
  position: PropTypes.oneOf(["absolute", "fixed", "relative"]),

  /**
   * The direction in which the drawer should slide-in from.
   */
  slideIn: PropTypes.oneOf(["left", "right", "bottom"]),

  /**
   * Determines if the drawer should render as a smaller size. The default
   * is 50px, but you can update this using a maxWidth CSS property on the drawer
   * (either via. style prop or a custom class).
   */
  slim: PropTypes.bool,

  /**
   * The width of the drawer when it is rendered as slim. If not specified,
   * it defaults to 50px.
   */
  slimWidth: PropTypes.string
};

ADrawer.displayName = "ADrawer";

export default ADrawer;
