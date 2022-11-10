import {forwardRef, useContext, useRef} from "react";
import ReactDOM from "react-dom";

import AAppContext from "../AApp/AAppContext";
import APageOverlay from "../APageOverlay";
import useFocusTrap from "../../hooks/useFocusTrap";
import {allowBodyScroll, preventBodyScroll} from "../../utils/helpers";

import "./AModal.scss";

const AModal = forwardRef(
  (
    {
      appendTo,
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
    const modalRef = useRef();
    useFocusTrap({
      rootRef: modalRef,
      isMounted: isOpen
    });
    isOpen && lockScroll
      ? preventBodyScroll(appRef.current)
      : allowBodyScroll(appRef.current);
    const containerClass = "modal-container";
    let visibilityClass = "";

    if (!isOpen) {
      visibilityClass = "modal--hidden";
    }

    if (withOverlay) {
      return ReactDOM.createPortal(
        <APageOverlay ref={modalRef} className={`${visibilityClass}`} {...rest}>
          {children}
        </APageOverlay>,
        appendTo || appRef.current
      );
    }

    return ReactDOM.createPortal(
      <Component
        className={`${visibilityClass} ${containerClass}`}
        ref={modalRef}
        {...rest}
      >
        {children}
      </Component>,
      appendTo || appRef.current
    );
  }
);

AModal.displayName = "AModal";

export default AModal;
