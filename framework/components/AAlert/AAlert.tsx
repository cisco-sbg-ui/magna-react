import React, {forwardRef} from "react";

import {keyCodes} from "../../utils/helpers";
import AIcon from "../AIcon";
import "./AAlert.scss";
import {AAlertProps} from "./types";

const AAlert = forwardRef<HTMLDivElement, AAlertProps>(
  (
    {
      children,
      className: propsClassName,
      dismissible = true,
      dismissable = true,
      level = "info",
      onClose,
      fitContentWidth = false,
      ...rest
    },
    ref
  ) => {
    const dismissibleKeyDownHandler = (e: React.KeyboardEvent) => {
      if (
        onClose &&
        [keyCodes.enter, keyCodes.space].includes(e.code as "Enter" | "Space") //must be code over key for "Space"
      ) {
        e.preventDefault();
        onClose(e);
      }
    };

    const isDismissible = !dismissible || !dismissable ? false : true;

    let className = `a-alert focus-box-shadow a-alert--state-`,
      icon = "";

    switch (level) {
      case "success":
        className += "success";
        icon = "positive";
        break;
      case "warning":
        className += "warning";
        icon = "warning";
        break;
      case "danger":
        className += "danger";
        icon = "negative";
        break;
      default:
        className += "information";
        icon = "info";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (fitContentWidth) {
      className += ` a-alert--fit-content-width`;
    }

    return (
      <div {...rest} role="alert" ref={ref} className={className}>
        <AIcon className="a-alert__icon a-alert__icon--level">{icon}</AIcon>
        <div className="a-alert__message">{children}</div>
        {isDismissible && (
          <AIcon
            className="a-alert__icon focus-box-shadow a-alert__icon--close"
            onClick={(e) => onClose && onClose(e)}
            onKeyDown={dismissibleKeyDownHandler}
            size={16}
            tabIndex={0}>
            x
          </AIcon>
        )}
      </div>
    );
  }
);

AAlert.displayName = "AAlert";

export default AAlert;
