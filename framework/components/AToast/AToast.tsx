import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import {keyCodes} from "../../utils/helpers";
import "./AToast.scss";
import {AToastProps} from "./types";

const AToast = forwardRef<HTMLDivElement, AToastProps>(
  (
    {
      children,
      className: propsClassName,
      dismissible = true,
      level = "info",
      onClose,
      placement = "top-right",
      title,
      ...rest
    },
    ref
  ) => {
    const dismissibleKeyDownHandler = (e: React.KeyboardEvent) => {
      //must be code over key for "Space"
      if (
        onClose &&
        [keyCodes.enter, keyCodes.space].includes(e.code as "Enter" | "Space")
      ) {
        e.preventDefault();
        onClose(e);
      }
    };

    let className = `a-toast a-toast--${placement}`;
    let icon = "";

    switch (level) {
      case "success":
        className += " a-toast--success";
        icon = "positive";
        break;
      case "warning":
        className += " a-toast--warning";
        icon = "warning";
        break;
      case "danger":
        className += " a-toast--danger";
        icon = "negative";
        break;
      default:
        className += " a-toast--information";
        icon = "info";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <AIcon className="a-toast__icon">{icon}</AIcon>
        <div className="a-toast__body">
          <div className="a-toast__title">{title}</div>
          <div className="a-toast__message">{children}</div>
        </div>
        {dismissible && (
          <AIcon
            className="a-toast__close focus-box-shadow"
            onClick={(e) => onClose && onClose(e)}
            onKeyDown={dismissibleKeyDownHandler}
            size={16}
            tabIndex={0}
          >
            x
          </AIcon>
        )}
      </div>
    );
  }
);

AToast.displayName = "AToast";

export default AToast;
