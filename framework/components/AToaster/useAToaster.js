import React, {forwardRef, useContext, useEffect, useRef} from "react";

import AAppContext from "../AApp/AAppContext";
import AToast from "../AToast";
import PausableTimeout from "./customTimeout";
import "./AToaster.scss";

let toastId = 1;

const AToasterToast = forwardRef(
  ({toasterToastId, timeout, ...toastProps}, ref) => {
    const {setToasts} = useContext(AAppContext);
    const timeoutRef = useRef(null);

    useEffect(() => {
      if (timeoutRef && timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (!timeout || timeout === -1) {
        return;
      }

      timeoutRef.current = new PausableTimeout(() => {
        setToasts((current) => current.filter((x) => x.id !== toasterToastId));
      }, timeout);
    }, [timeout, setToasts, toasterToastId]);

    let className = "a-toaster__toast";
    if (toastProps.className) {
      className += ` ${toastProps.className}`;
    }

    return (
      <AToast
        data-ignore-outside-click
        dismissable={false}
        {...toastProps}
        ref={ref}
        className={className}
        role="status"
        aria-live="polite"
        onClose={() =>
          setToasts((current) => current.filter((x) => x.id !== toasterToastId))
        }
        onMouseEnter={() => {
          if (!timeoutRef.current) {
            return;
          }

          timeoutRef.current.pause();
        }}
        onMouseLeave={() => {
          if (!timeoutRef.current) {
            return;
          }

          timeoutRef.current.start();
        }}
      />
    );
  }
);

AToasterToast.displayName = "AToasterToast";

const useAToaster = () => {
  const {setToasts} = useContext(AAppContext);

  return {
    addToast: (props, timeout = 5000) => {
      const id = toastId++;

      setToasts((current) => {
        return [
          ...current,
          {
            id: id,
            placement: props.placement || "bottom-right",
            component: (
              <AToasterToast
                {...props}
                key={id}
                toasterToastId={id}
                timeout={timeout}
              />
            )
          }
        ];
      });

      return id;
    },
    removeToast: (id) => {
      setToasts((current) => current.filter((x) => x.id !== id));
    }
  };
};

export default useAToaster;
