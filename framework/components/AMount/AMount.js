import PropTypes from "prop-types";
import React, {forwardRef, useContext, useRef, useState} from "react";

import AAppContext from "../AApp/AAppContext";
import {AToastPlate} from "../AToaster";
import {useCombinedRefs} from "../../utils/hooks";

const AMount = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      wrapClassName: propsWrapClassName,
      ...rest
    },
    ref
  ) => {
    const newWrapRef = useRef(null);
    const newAppRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, newAppRef);
    const {toasts, setToasts} = useContext(AAppContext);
    const [toasts2, setToasts2] = useState([]);

    let className = "a-mount";
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let wrapClassName = "a-mount--wrap";
    if (propsWrapClassName) {
      wrapClassName += ` ${propsWrapClassName}`;
    }

    const TagName = component || "div";

    const appContext = {
      appRef: combinedRef,
      wrapRef: newWrapRef,
      toasts: toasts || toasts2,
      setToasts: setToasts || setToasts2
    };

    return (
      <TagName {...rest} ref={combinedRef} className={className}>
        <AAppContext.Provider value={appContext}>
          <div ref={newWrapRef} className={wrapClassName}>
            {children}
          </div>
          <AToastPlate />
        </AAppContext.Provider>
      </TagName>
    );
  }
);

AMount.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,
  /**
   * Sets the class name for the wrapper container.
   */
  wrapClassName: PropTypes.string
};

AMount.displayName = "AMount";

export default AMount;
