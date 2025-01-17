import React, {forwardRef, createContext, useRef} from "react";
import PropTypes from "prop-types";

import AModal from "../AModal/AModal";

import "./ADrawer.scss";
import useEscapeKeydown from "../../hooks/useEscapeKeydown/useEscapeKeydown";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import {useCombinedRefs, useDelayUnmount, usePrevious} from "../../utils/hooks";

const DrawerContext = createContext({});

const ADrawer = forwardRef(
  (
    {
      as,
      asModal: propsAsModal,
      className: propsClassName,
      children,
      openHeight,
      openWidth,
      responsiveWidth,
      isOpen,
      onClose,
      closeOnOutsideClick,
      position = "fixed",
      slideIn = "left",
      slim = false,
      slimHeight,
      slimWidth,
      style: propsStyle,
      withTransitions = true,
      usesDrawerToggleHook = false,
      ...rest
    },
    ref
  ) => {
    const drawerRef = useRef();
    const combinedRef = useCombinedRefs(ref, drawerRef);
    const shouldRenderChildren = useDelayUnmount({
      isOpen,
      delayTime: 300,
      isEnabled: withTransitions
    });

    useEscapeKeydown({
      isEnabled: !propsAsModal && isOpen,
      onKeydown: onClose
    });

    useOutsideClick({
      rootRef: !propsAsModal && combinedRef,
      isEnabled: isOpen && closeOnOutsideClick,
      onExit: onClose
    });

    // A fixed drawer should automatically render as a modal unless specified
    const shouldRenderModal =
      propsAsModal || (position === "fixed" && propsAsModal == undefined);
    const DrawerPanelComponent = as || "div";
    const orientation =
      slideIn === "bottom" || slideIn === "top" ? "horizontal" : "vertical";
    let className = `a-drawer a-drawer--${orientation} a-drawer--${position} a-drawer--${slideIn}`;

    const prevChildren = usePrevious(children);

    const style = {...propsStyle};

    if (shouldRenderModal) {
      className += " a-drawer--modal";
    }

    if (withTransitions) {
      className += " a-drawer--transitions";
    }

    if (shouldRenderChildren) {
      className += isOpen ? " a-drawer--show" : " a-drawer--hidden";
    } else {
      className += " a-drawer--hidden";
    }

    if (slim) {
      className += " a-drawer--slim";

      if (slimWidth) {
        style.width = slimWidth;
        style.maxWidth = slimWidth;
      }

      if (slimHeight) {
        style.height = slimHeight;
        style.maxHeight = slimHeight;
      }
    }

    if (isOpen && !slim) {
      if (openWidth) {
        style.width = openWidth;
      } else if (responsiveWidth) {
        // If it's an array, it means we want to make the drawer responsive at
        // the corresponding breakpoints
        if (Array.isArray(responsiveWidth)) {
          // Use the first size as the smallest width
          className += ` a-drawer--size-${responsiveWidth[0]}`;
          // Make the drawer responsive to the other sizes
          className +=
            " " +
            responsiveWidth.map((s) => `a-drawer--responsive-${s}`).join(" ");
        }
        // For a string we want to set a fixed width
        else if (typeof responsiveWidth === "string") {
          className += ` a-drawer--size-${responsiveWidth}`;
        }
      } else if (openHeight) {
        style.height = openHeight;
      }
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

    let renderChildren = shouldRenderChildren && children;
    const tabIndexProps = {};
    if (usesDrawerToggleHook) {
      renderChildren = !isOpen ? prevChildren : children;
      tabIndexProps.tabIndex = -1;
    }

    const drawerPanelComponent = (
      <DrawerContext.Provider value={{onClose}}>
        <DrawerPanelComponent
          {...rest}
          {...tabIndexProps}
          ref={shouldRenderModal ? null : combinedRef}
          className={shouldRenderModal ? "" : className}
          style={shouldRenderModal ? {height: "100%"} : style}
        >
          {renderChildren}
        </DrawerPanelComponent>
      </DrawerContext.Provider>
    );

    if (!shouldRenderModal) {
      return drawerPanelComponent;
    }

    return (
      <AModal
        {...rest}
        ref={combinedRef}
        className={className}
        delayUnmount={300}
        withCenteredContent={false}
        withTransitions={false}
        isOpen={shouldRenderChildren}
        style={style}
        onClose={onClose}
        closeOnOutsideClick={closeOnOutsideClick}
      >
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
   * Enables closing the drawer when clicking outside of the drawer content.
   */
  closeOnOutsideClick: PropTypes.bool,

  /**
   * Determines if the drawer is opened or closed. For a permanent
   * drawer, pass a constant value of `true`. An example of when this
   * might be useful is for a sidebar that toggles between its slim and
   * full version.
   */
  isOpen: PropTypes.bool,

  /**
   * Function which closes the Drawer. It is necessary for accessibility concerns,
   * specifically to enable exiting the Drawer upon pressing the "Escape" key.
   */
  onClose: PropTypes.func,

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
   * Automatically adjust the width of the drawer based on the viewport
   * width, (when not using the slim variant, and a fixed openWidth prop is
   * not specified).
   * The Drawer renders with the Magnetic defined widths for the Magnetic
   * defined breakpoints.
   */
  responsiveWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(["sm", "md", "lg", "xl"])),
    PropTypes.string
  ]),

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
   * Set to true if using the
   */
  usesDrawerToggleHook: PropTypes.bool
};

ADrawer.displayName = "ADrawer";

export default ADrawer;
export {DrawerContext};
