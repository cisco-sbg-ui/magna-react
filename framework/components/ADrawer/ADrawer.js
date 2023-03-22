import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import AModal from "../AModal/AModal";
import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";

import "./ADrawer.scss";
import {useDelayUnmount} from "../../utils/hooks";

const ADrawer = forwardRef(
  (
    {
      as,
      asModal: propsAsModal,
      className: propsClassName,
      children,
      openHeight,
      openWidth,
      isOpen,
      position = "fixed",
      slideIn = "left",
      slim = false,
      slimHeight,
      slimWidth,
      closeBtnOnClick,
      closeTitle,
      closeBtnProps,
      style: propsStyle,
      ...rest
    },
    ref
  ) => {
    const shouldRender = useDelayUnmount(isOpen, 300);
    // A fixed drawer should automatically render as a modal unless specified
    const shouldRenderModal =
      propsAsModal || (position === "fixed" && propsAsModal == undefined);
    const DrawerPanelComponent = as || "div";
    const orientation =
      slideIn === "bottom" || slideIn === "top" ? "horizontal" : "vertical";
    let className = `a-drawer a-drawer--${orientation} a-drawer--${position} a-drawer--${slideIn}`;
    const closeButtonClassName = "a-drawer--close-button";

    const style = {...propsStyle};

    if (isOpen) {
      className += ` slide-in-from-${slideIn}`;
    } else {
      className += ` slide-out-to-${slideIn}`;
    }

    if (slim) {
      className += ` a-drawer--slim`;

      if (slimWidth) {
        style.width = slimWidth;
        style.maxWidth = slimWidth;
      }

      if (slimHeight) {
        style.height = slimHeight;
        style.maxHeight = slimHeight;
      }
    }
    if (!isOpen) {
      //className += ` a-drawer--hidden`;
    } else if (!slim && openWidth) {
      style.width = openWidth;
    } else if (!slim && openHeight) {
      style.height = openHeight;
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
    if (openHeight) {
      style.maxHeight = openHeight;
    }
    if (slimHeight && slim) {
      style.slimHeight = slimHeight;
    }

    let closeButton;
    if (closeBtnOnClick) {
      closeButton = (
        <AButton
          className={closeButtonClassName}
          onClick={closeBtnOnClick}
          icon
          tertiaryAlt
          {...closeBtnProps}
        >
          {closeTitle ? (
            <div className="pa-2">{closeTitle}</div>
          ) : (
            <AIcon>close</AIcon>
          )}
        </AButton>
      );
    }

    const drawerPanelComponent = (
      <DrawerPanelComponent
        {...rest}
        ref={ref}
        className={className}
        style={style}
      >
        {closeButton}
        {children}
      </DrawerPanelComponent>
    );

    if (!shouldRenderModal) {
      return shouldRender && drawerPanelComponent;
    }

    return (
      <AModal delayMount={300} isOpen={isOpen} withAnimations={false} {...rest}>
        {drawerPanelComponent}
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
   * The height of the drawer when it is opened. Most commonly used
   * when the drawer slides up from the bottom of the page.
   */
  openHeight: PropTypes.string,

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
  slimWidth: PropTypes.string,
  /**
   * Pass onClose handler for Drawer to handle onClose icon and action.
   * Default: x Icon
   */
  closeBtnOnClick: PropTypes.func,
  /**
   * Option for close button title instead of default icon
   */
  closeTitle: PropTypes.string,
  /**
   * Any additional props for close button
   */
  closeBtnProps: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

ADrawer.displayName = "ADrawer";

export default ADrawer;
