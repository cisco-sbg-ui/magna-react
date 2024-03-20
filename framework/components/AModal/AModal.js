import React, {forwardRef, useContext, useEffect, useRef, useMemo} from "react";
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
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";

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
      isOpen: propsIsOpen,
      onClose,
      small,
      medium,
      large,
      xlarge,
      closeOnOutsideClick = false,
      withCenteredContent = true,
      withFocusTrap = true,
      autoFocusElementRef,
      withOverlay = true,
      withScrollLock = true,
      withTransitions = true,
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

    const elementRefToAutoFocus = useMemo(() => {
      if (autoFocusElementRef) {
        return autoFocusElementRef;
      } else if (typeof autoFocusElementRef === "undefined") {
        return _ref;
      } else {
        // if (autoFocusElementRef === null) - disable autofocus
        return undefined;
      }
    }, [_ref, autoFocusElementRef]);

    useFocusTrap({
      rootRef: _ref,
      isEnabled: withFocusTrap && shouldRenderChildren,
      autoFocusElementRef: elementRefToAutoFocus
    });

    usePopupQuickExit({
      popupRef: closeOnOutsideClick && _ref,
      isEnabled: isOpen,
      onExit: onClose
    });

    useEffect(() => {
      shouldRenderChildren && withScrollLock
        ? preventBodyScroll()
        : allowBodyScroll();

      if (withScrollLock) {
        return allowBodyScroll;
      }
    }, [withScrollLock, shouldRenderChildren]);

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

    if (withCenteredContent) {
      contentClassName += " a-modal-container--center";
    }

    if (propsClassName) {
      contentClassName += ` ${propsClassName}`;
    }

    if (!appendTo && !appRef.current) {
      return null;
    }

    if (rest.onClickOutside) {
      console.warn(
        "onClickOutside has been removed. Use onClose and set closeOnOutsideClick to true"
      );
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
    const renderChildren = shouldRenderChildren ? children : null;

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
          }}
        >
          <Component
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            ref={handleMultipleRefs(_ref, ref)}
            className={contentClassName}
            {...rest}
          >
            {renderChildren}
          </Component>
        </APageOverlay>,
        appendTo || appRef.current
      );
    }

    return ReactDOM.createPortal(
      <Component
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
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
        {renderChildren}
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
   * Enables closing the modal when clicking outside of the modal content.
   */
  closeOnOutsideClick: PropTypes.bool,

  /**
   * When the modal is rendered `withTransitions`, there is technically a
   * delay from when you set `isOpen` to `false` to when the component
   * actually unmounts from the DOM. This is done to preserve the transition.
   *
   * You can adjust that delay with this prop.
   */
  delayUnmount: PropTypes.number,

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
   * @deprecated use "closeOnOutsideClick" in conjunction with a passed in "onClose" function to close modal
   */
  onClickOutside: PropTypes.func,

  /**
   * Function which closes the Modal. It is necessary for accessibility concerns,
   * specifically to enable exiting the Modal upon pressing the "Escape" key.
   */
  onClose: PropTypes.func.isRequired,

  /**
   * Determines if the content rendered underneath the modal should
   * automatically be centered vertically and horizontally.
   */
  withCenteredContent: PropTypes.bool,

  /**
   * Determines if focus should be trapped when the modal is opened.
   */
  withFocusTrap: PropTypes.bool,

  /**
   * Specifies what element to autofocus when the modal is opened. By default, when omitted or undefined, the modal root is focused. When null is passed, the modal does not do any autofocus.
   */
  autoFocusElementRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      current: PropTypes.any
    })
  ]),

  /**
   * Determines if the modal should render with an faded backdrop.
   */
  withOverlay: PropTypes.bool,

  /**
   * Determines if focus should be "trapped" inside the modal when
   * it is opened (encouraged and recommended).
   */
  withScrollLock: PropTypes.bool,

  /**
   * Determines if the modal should open and close with CSS transitions.
   */
  withTransitions: PropTypes.bool
};

AModal.displayName = "AModal";

export default AModal;
