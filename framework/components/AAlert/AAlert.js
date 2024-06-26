import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import {keyCodes} from "../../utils/helpers";
import AIcon from "../AIcon";
import "./AAlert.scss";

const AAlert = forwardRef(
  (
    {
      children,
      className: propsClassName,
      dismissable = true,
      level = "info",
      onClose,
      fitContentWidth = false,
      ...rest
    },
    ref
  ) => {
    const dismissableKeyDownHandler = (e) => {
      if (onClose && [keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
        e.preventDefault();
        onClose(e);
      }
    };

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
        {dismissable && (
          <AIcon
            className="a-alert__icon focus-box-shadow a-alert__icon--close"
            onClick={(e) => onClose && onClose(e)}
            onKeyDown={dismissableKeyDownHandler}
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

AAlert.propTypes = {
  /**
   * Toggles the close button.
   */
  dismissable: PropTypes.bool,
  /**
   * Specifies the display variant.
   */
  level: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  /**
   * A callback for handling the close event.
   */
  onClose: PropTypes.func,
  /**
   * Unset default width: 100% on the alert.
   */
  fitContentWidth: PropTypes.bool
};

AAlert.displayName = "AAlert";

export default AAlert;
