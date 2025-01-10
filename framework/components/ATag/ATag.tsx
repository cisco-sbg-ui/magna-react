import React, {forwardRef} from "react";
import AIcon from "../AIcon";

import {keyCodes} from "../../utils/helpers";
import "./ATag.scss";

import type {ATagProps} from "./types";

const STATUS_ICON: {[key: string]: string} = {
  excellent: "excellent",
  positive: "positive",
  "low-warning": "low-warning",
  warning: "warning",
  "severe-warning": "severe-warning",
  negative: "negative",
  inactive: "inactive",
  info: "info",
  disabled: "disabled",
  "in-progress": "in-progress",
  active: "positive",
  allow: "allow",
  deny: "disabled",
  alert: "alert"
};

const ATag = forwardRef<HTMLDivElement | HTMLAnchorElement, ATagProps>(
  (
    {
      children,
      className: propsClassName,
      href,
      onClick,
      onKeyDown,
      target,
      small,
      large,
      status,
      color,
      hideStatusIcon = false,
      customIcon = false,
      dropdown = false,
      open = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const interactable = (href || onClick) && !disabled;
    let className = "a-tag";

    if (interactable) {
      className += ` interactable`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (large) {
      className += ` a-tag--lg`;
    }

    if (small) {
      className += ` a-tag--sm`;
    }

    if (status) {
      className += ` a-tag--status a-tag--status-${status}`;
    }

    if (color) {
      className += ` a-tag--${color}`;
    }

    if (hideStatusIcon) {
      className += ` a-tag--hide-status-icon`;
    }

    let TagName: React.ElementType = interactable ? "a" : "div";
    const props: React.HTMLProps<HTMLElement> = {
      ...rest,

      className,
      onClick: (e) => {
        if (disabled) {
          return;
        }

        onClick && onClick(e);
      },
      onKeyDown: (e: React.KeyboardEvent) => {
        if (disabled) {
          return;
        }

        if (!href && onClick && [keyCodes.enter].includes(e.key as "Enter")) {
          e.preventDefault();
          onClick(e);
        } else {
          //TODO not sure what this error is for
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onKeyDown && onKeyDown(e);
        }
      },
      target // Add the 'target' property to the props object
    };

    if (href) {
      TagName = "a";
      props.href = href;
      props.target = target;
    }

    if (onClick && !disabled) {
      props.role = "button";
    }

    if (href || onClick) {
      props.tabIndex = 0;
    }

    let tagWithIcon: React.ReactNode = null;

    if (status) {
      tagWithIcon = (
        <>
          {!customIcon && !hideStatusIcon && (
            <AIcon className="a-icon--status" left>
              {STATUS_ICON[status]}
            </AIcon>
          )}
          {React.isValidElement(customIcon) && customIcon}
          {children}
        </>
      );
    }

    return React.createElement(
      TagName,
      {className, ref: ref, ...props},
      tagWithIcon || children,
      dropdown && !disabled && (
        <AIcon className="a-tag--dropdown-icon" right>
          {open ? "caret-up" : "caret-down"}
        </AIcon>
      )
    );
  }
);

ATag.displayName = "ATag";

export default ATag;
