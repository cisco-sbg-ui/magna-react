import React, {forwardRef} from "react";

import AIcon from "../AIcon";
import "./ABadge.scss";
import type {ABadgeProps, TBadgeSpanProps} from "./types";

const ABadge = forwardRef<HTMLDivElement, ABadgeProps>(
  (
    {
      children,
      className: propsClassName,
      content,
      display = true,
      label = "badge",
      small,
      medium = true,
      large,
      alertType,
      dot,
      counter,
      notify = true,
      ...rest
    },
    ref
  ) => {
    let className = "a-badge";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const badgeProps: TBadgeSpanProps = {
      "aria-atomic": true,
      "aria-label": label,
      "aria-live": "polite",
      role: "status",
      className: "a-badge__badge"
    };

    if (counter) {
      badgeProps.className += ` a-badge__badge--counter`;
    } else if (alertType) {
      badgeProps.className += ` a-badge__badge--alert-${alertType}`;
    } else if (notify) {
      badgeProps.className += ` a-badge__badge--notify`;
    }

    if (dot) {
      badgeProps.className += " a-badge__badge--dot";
    }

    if (small) {
      badgeProps.className += " a-badge__badge--small";
    } else if (large) {
      badgeProps.className += " a-badge__badge--large";
    } else if (medium) {
      badgeProps.className += " a-badge__badge--medium";
    }

    const badgeContent =
      display && alertType ? (
        <>
          <AIcon>{alertType}</AIcon>
          {content}
        </>
      ) : (
        content
      );
    return (
      <div {...rest} ref={ref} className={className}>
        {display && (
          <div className="a-badge__wrapper">
            <span {...badgeProps}>{badgeContent}</span>
          </div>
        )}
        {children}
      </div>
    );
  }
);

export default ABadge;
