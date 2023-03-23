import React, {forwardRef, useContext, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import AAppContext from "../AApp/AAppContext";
import APageOverlay from "../APageOverlay";
import useFocusTrap from "../../hooks/useFocusTrap/useFocusTrap";
import {
  allowBodyScroll,
  handleMultipleRefs,
  isBackwardTab,
  isForwardTab,
  preventBodyScroll
} from "../../utils/helpers";

import "./AModal.scss";
import {useDelayUnmount} from "../../utils/hooks";

/**
 * Reasons for not stopping propagation for the following keys:
 *  - Escape Key: allows user to close the modal
 *  - Forward and Backward Tab: allows the event
 *    to bubble to the document, which is needed
 *    since the modal's focus trap is registered
 *    on the window document.
 *    @see hooks/useFocusTrap
 */
const shouldStopPropagation = (e) => {
  const key = e.key;
  return key !== "Escape" && !isForwardTab(e) && !isBackwardTab(e);
};

const AModal = forwardRef(
  (
    {
      appendTo = null,
      as = "div",
      className: propsClassName,
      delayUnmount = 200,
      children,
      lockScroll = true,
      withOverlay = true,
      withTransitions = true,
      trapFocus = true,
      isOpen: propsIsOpen,
      small,
      medium,
      large,
      xlarge,
      onClickOutside,
      centerContent = true,
      ...rest
    },
    ref
  ) => {
    const {appRef} = useContext(AAppContext);
    const Component = as;
    const hasPortalNode = appendTo || appRef.current;
    const isOpen = !!hasPortalNode && propsIsOpen;
    const _ref = useRef();

    const shouldRenderChildren = useDelayUnmount({
      isOpen,
      delayTime: delayUnmount,
      isEnabled: withTransitions || delayUnmount
    });

    useFocusTrap({
      rootRef: _ref,
      isEnabled: trapFocus && shouldRenderChildren
    });

    useEffect(() => {
      shouldRenderChildren && lockScroll
        ? preventBodyScroll()
        : allowBodyScroll();
      return allowBodyScroll;
    }, [lockScroll, shouldRenderChildren]);

    let visibilityClass = "";

    if (!shouldRenderChildren) {
      visibilityClass += "a-modal--hidden";
    }

    let overlayClassName = "";
    let contentClassName = `a-modal-container ${visibilityClass}`;

    if (withTransitions) {
      contentClassName += " a-modal-container--transitions";
      overlayClassName += " a-modal--transitions";
    }

    if (shouldRenderChildren) {
      overlayClassName += isOpen ? " a-modal--show" : " a-modal--hide";
      contentClassName += isOpen
        ? " a-modal-container--grow"
        : " a-modal-container--shrink";
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

    if (centerContent) {
      contentClassName += " a-modal-container--center";
    }

    if (propsClassName) {
      contentClassName += ` ${propsClassName}`;
    }

    if (!appendTo && !appRef.current) {
      return null;
    }

    /**
     * In the case where `AModal` is rendered inside a clickable element
     * like a button component, we want to prevent clicks and certain
     * keydown presses from bubbling outside the modal, which could cause
     * unintended side effects (like closing an accordion). This is why we
     * call `stopPropagation` below.
     *
     * @example
     * <AButton>
     *   Open Modal
     *   <AModal isOpen={open}>
     *      // Don't want clicks, Enter key presses, or Space key
     *      // presses in here here to get to `AButton`
     *   </AModal>
     * </AButton>
     */
    if (withOverlay) {
      return ReactDOM.createPortal(
        <APageOverlay
          className={`a-modal ${visibilityClass} ${overlayClassName}`}
          onKeyDown={(e) => {
            if (shouldStopPropagation(e)) {
              e.stopPropagation();
            }
            const {onKeyDown: propsOnKeyDown} = rest;
            if (typeof propsOnKeyDown === "function") {
              propsOnKeyDown(e);
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            const {target} = e;
            if (target !== _ref.current) {
              return;
            }

            onClickOutside && onClickOutside();
          }}
        >
          <Component
            role="dialog"
            aria-modal="true"
            ref={handleMultipleRefs(_ref, ref)}
            className={contentClassName}
            {...rest}
          >
            {shouldRenderChildren ? children : null}
          </Component>
        </APageOverlay>,
        appendTo || appRef.current
      );
    }

    return ReactDOM.createPortal(
      <Component
        role="dialog"
        aria-modal="true"
        className={`${contentClassName}`}
        ref={handleMultipleRefs(_ref, ref)}
        onKeyDown={(e) => {
          if (shouldStopPropagation(e)) {
            e.stopPropagation();
          }
          const {onKeyDown: propsOnKeyDown} = rest;
          if (typeof propsOnKeyDown === "function") {
            propsOnKeyDown(e);
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          const {onClick: propsOnClick} = rest;
          if (typeof propsOnClick === "function") {
            propsOnClick(e);
          }
        }}
        {...rest}
      >
        {shouldRenderChildren ? children : null}
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
  onClickOutside: PropTypes.func,

  /**
   * Determines if the modal should open and close with CSS animations.
   */
  withTransitions: PropTypes.bool
};

AModal.displayName = "AModal";

export default AModal;
