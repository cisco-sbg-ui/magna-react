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
      as,
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
    const Component = as || "div";
    const modalRef = useRef();
    useFocusTrap({
      rootRef: modalRef,
      isMounted: isOpen
    });
    isOpen && lockScroll
      ? preventBodyScroll(appRef.current)
      : allowBodyScroll(appRef.current);
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
          <Component ref={modalRef} className={contentClassName} {...rest}>
            {children}
          </Component>
        </APageOverlay>,
        appendTo || appRef.current
      );
    }

    return ReactDOM.createPortal(
      <Component className={contentClassName} ref={modalRef} {...rest}>
        {children}
      </Component>,
      appendTo || appRef.current
    );
  }
);

AModal.displayName = "AModal";

export default AModal;
