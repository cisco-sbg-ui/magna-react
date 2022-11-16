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
      contained = false,
      inline = false,
      isOpen,
      slideIn = "left",
      slim = false,
      ...rest
    },
    ref
  ) => {
    const DrawerPanelComponent = as || "div";
    const orientation =
      slideIn === "bottom" || slideIn === "top" ? "horizontal" : "vertical";
    let className = `drawer drawer--${orientation} drawer--${slideIn}`;

    if (inline) {
      className += ` drawer--inline`;
    }
    if (contained) {
      className += ` drawer--contained`;
    }
    if (slim) {
      className += ` drawer--slim`;
    }
    if (!isOpen) {
      className += ` drawer--hidden`;
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (!asModal) {
      return (
        <DrawerPanelComponent
          {...rest}
          isOpen={isOpen}
          ref={ref}
          className={className}
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
   * TLDR; Positions the drawer as absolute instead of fixed.
   *
   * Determines if the Drawer should be contained within a parent.
   * This can be useful in situations where the drawer should _not_
   * take up the entire screen, but rather, only fly-open within a subset
   * of the page.
   *
   * An example is a drawer that should render underneath a fixed navigation bar.
   */
  contained: PropTypes.bool,

  /**
   * TLDR; Positions the drawer as 'relative' instead of absolute or fixed.
   *
   * Determines if the Drawer should render as an inline element with
   * its siblings. The implications are that content surrounding the drawer
   * will move relative to the drawer's opened/close states.
   *
   * An example is a drawer that should render underneath a fixed navigation bar
   * _and_ should push content to the side as it opens.
   */
  inline: PropTypes.bool,

  /**
   * Determines if the drawer is opened or closed. For a permanent
   * drawer, pass a constant value of `true`. An example of when this
   * might be useful is for a sidebar that toggles between its slim and
   * full version.
   */
  isOpen: PropTypes.bool,

  /**
   * The direction in which the drawer should slide-in from.
   */
  slideIn: PropTypes.oneOf(["left", "right", "bottom"]),

  /**
   * Determines if the drawer should render as a smaller size. The default
   * is 50px, but you can update this using a maxWidth CSS property on the drawer
   * (either via. style prop or a custom class).
   */
  slim: PropTypes.bool
};

ADrawer.displayName = "ADrawer";

export default ADrawer;
