import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import {keyCodes} from "../../utils/helpers";
import "./AToast.scss";

const AToast = forwardRef(
  (
    {
      children,
      className: propsClassName,
      dismissable = true,
      level = "info",
      onClose,
      placement = "top-right",
      title,
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
        <AIcon className="a-toast__icon" size={20}>
          {icon}
        </AIcon>
        <div className="a-toast__body">
          <div className="a-toast__title">{title}</div>
          <div className="a-toast__message">{children}</div>
        </div>
        {dismissable && (
          <AIcon
            className="a-toast__close focus-box-shadow"
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

AToast.propTypes = {
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
   * Specifies the placement of the toast.
   */
  placement: PropTypes.oneOf(["bottom-right", "top", "top-right"]),
  /**
   * Sets the title.
   */
  title: PropTypes.node
};

AToast.displayName = "AToast";

export default AToast;
