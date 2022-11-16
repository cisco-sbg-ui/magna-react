import {forwardRef, useContext, useEffect, useRef} from "react";
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
      isOpen,
      ...rest
    },
    ref
  ) => {
    const {appRef} = useContext(AAppContext);
    const Component = as;
    const _ref = useRef();
    useFocusTrap({
      rootRef: _ref,
      isEnabled: isOpen
    });
    useEffect(() => {
      isOpen && lockScroll ? preventBodyScroll() : allowBodyScroll();
    }, [lockScroll, isOpen]);
    let visibilityClass = "";
    if (!isOpen) {
      visibilityClass = "modal--hidden";
    }

    let contentClassName = `modal-container ${visibilityClass}`;
    if (propsClassName) {
      contentClassName += ` ${propsClassName}`;
    }

    if (withOverlay) {
      return ReactDOM.createPortal(
        <APageOverlay className={visibilityClass}>
          <Component
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
   * Renders the modal with a backdrop over the content behind the modal.
   * To render your own custom backdrop, specify `withOverlay` as false,
   * and render your own overlay as a child to the Modal content.
   */
  withOverlay: PropTypes.bool,

  /**
   * Determines if the modal is opened or closed.
   */
  isOpen: PropTypes.bool
};

AModal.displayName = "AModal";

export default AModal;
