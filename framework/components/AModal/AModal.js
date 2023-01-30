import React, {forwardRef, useContext, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import AAppContext from "../AApp/AAppContext";
import APageOverlay from "../APageOverlay";
import useFocusTrap from "../../hooks/useFocusTrap";
import {
  allowBodyScroll,
  handleMultipleRefs,
  preventBodyScroll
} from "../../utils/helpers";

import "./AModal.scss";

const AModal = forwardRef(
  (
    {
      appendTo = null,
      as = "div",
      className: propsClassName,
      children,
      lockScroll = true,
      withOverlay = true,
      trapFocus = true,
      isOpen: propsIsOpen,
      small,
      medium,
      large,
      xlarge,
      onClickOutside,
      ...rest
    },
    ref
  ) => {
    const {appRef} = useContext(AAppContext);
    const Component = as;
    const hasPortalNode = appendTo || appRef.current;
    const isOpen = !!hasPortalNode && propsIsOpen;
    const _ref = useRef();

    useFocusTrap({
      rootRef: _ref,
      isEnabled: trapFocus && isOpen
    });
    useEffect(() => {
      isOpen && lockScroll ? preventBodyScroll() : allowBodyScroll();
    }, [lockScroll, isOpen]);
    let visibilityClass = "";
    if (!isOpen) {
      visibilityClass = "a-modal--hidden";
    }

    let contentClassName = `a-modal-container ${visibilityClass}`;
    if (propsClassName) {
      contentClassName += ` ${propsClassName}`;
    }

    if (small) {
      contentClassName += " a-modal-container--small";
    } else if (medium) {
      contentClassName += " a-modal-container--medium";
    } else if (large) {
      contentClassName += " a-modal-container--large";
    } else if (xlarge) {
      contentClassName += " a-modal-container--xlarge";
    }

    if (!appendTo && !appRef.current) {
      return null;
    }

    if (withOverlay) {
      return ReactDOM.createPortal(
        <APageOverlay className={visibilityClass} onClick={onClickOutside}>
          <Component
            role="dialog"
            aria-modal="true"
            ref={handleMultipleRefs(_ref, ref)}
            className={contentClassName}
            {...rest}
          >
            {children}
          </Component>
        </APageOverlay>,
        appendTo || appRef.current
      );
    }

    return ReactDOM.createPortal(
      <Component
        role="dialog"
        aria-modal="true"
        className={contentClassName}
        ref={handleMultipleRefs(_ref, ref)}
        {...rest}
      >
        {children}
      </Component>,
      appendTo || appRef.current
    );
  }
);

AModal.propTypes = {
  "aria-label": function (props, propName, componentName) {
    // No a11y prop supplied at all
    if (!props["aria-labelledby"] && !props[propName]) {
      const msg = `You did not provide an accessible title to \`${componentName}\`.

You should provide either an \`aria-label\` or \`aria-labelledby\` prop to \`${componentName}\`. In the case of \`aria-label\`, pass a string describing your modal's content. In the case of \`aria-labelledby\`, pass an ID of a child element that should serve as the title for your modal's content.

  - For examples, reference the Magna-React documentation (https://magna-react.vercel.app/components/modal#usage).

  - For more information about aria labelling, reference WAI-ARIA (https://w3c.github.io/aria/#aria-label).
`;
      return new Error(msg);
    }

    const currentPropName = props[propName] ? propName : "aria-labelledby";
    const propValue = props[currentPropName];

    if (typeof propValue !== "string") {
      const msg = `Invalid prop \`${currentPropName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected \`string\`.`;
      return new Error(msg);
    }
  },

  /**
   * Where the modal node should be appended to in the DOM.
   */
  appendTo: PropTypes.elementType,

  /**
   * Sets the base component.
   */
  as: PropTypes.elementType,

  /**
   * String representing class names to be passed to modal content container,
   * i.e., _not_ on the page overlay element.
   */
  className: PropTypes.string,

  /**
   * Prevents the user from scrolling when the modal is open.
   */
  lockScroll: PropTypes.bool,

  /**
   * Determines if focus should be trapped when the modal is opened.
   */
  trapFocus: PropTypes.bool,

  /**
   * Renders the modal with a backdrop over the content behind the modal.
   * To render your own custom backdrop, specify `withOverlay` as false,
   * and render your own overlay as a child to the Modal content.
   */
  withOverlay: PropTypes.bool,

  /**
   * Determines if the modal is opened or closed.
   */
  isOpen: PropTypes.bool,

  /**
   * Sets the modal width to small.
   */
  small: PropTypes.bool,

  /**
   * Sets the modal width to medium.
   */
  medium: PropTypes.bool,

  /**
   * Sets the modal width to large.
   */
  large: PropTypes.bool,

  /**
   * Sets the modal width to extra large.
   */
  xlarge: PropTypes.bool,

  /**
   * If not using the `usePopupQuickExit` hook, pass in a function to handle clicking outside of the modal event. `withOverlay` prop must be set to true.
   */
  onClickOutside: PropTypes.func
};

AModal.displayName = "AModal";

export default AModal;
