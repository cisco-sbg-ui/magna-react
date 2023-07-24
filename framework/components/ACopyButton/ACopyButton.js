import React, {forwardRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import AButton from "../AButton/AButton";
import AContextualNotification from "../AContextualNotification/AContextualNotification";
import AIcon from "../AIcon/AIcon";
import ATriggerTooltip from "../ATriggerTooltip/ATriggerTooltip";
import {copyToClipboard} from "../../utils/helpers";

import "./ACopyButton.scss";

const ACopyButton = forwardRef(
  (
    {
      id,
      value,
      containerId,
      children,
      tertiary = true,
      tertiaryAlt,
      defaultLabel = true,
      ...rest
    },
    ref
  ) => {
    const [clicked, setClicked] = useState(0);

    let tooltipClassName = "a-copy-button-tooltip";

    if (clicked) {
      tooltipClassName += " a-copy-button-tooltip--copied a-tooltip--context";
    }

    const buttonType = {
      tertiary: !tertiaryAlt,
      tertiaryAlt
    };

    return (
      <ATriggerTooltip
        className={tooltipClassName}
        content={
          clicked ? (
            <AContextualNotification variant="success">
              Copied to clipboard
            </AContextualNotification>
          ) : (
            "Copy to clipboard"
          )
        }
        onClose={() => {
          setTimeout(() => {
            setClicked(0);
          }, 300);
        }}
      >
        <AButton
          ref={ref}
          className="a-copy-button"
          icon
          onClick={() => {
            copyToClipboard(value, containerId);
            setClicked(clicked + 1);
          }}
          {...buttonType}
          {...rest}
        >
          <AIcon left={!!children || defaultLabel}>copy</AIcon>
          {children || (defaultLabel && "Copy")}
        </AButton>
      </ATriggerTooltip>
    );
  }
);

ACopyButton.displayName = "ACopyButton";

ACopyButton.propTypes = {
  /**
   * Component id
   */
  id: PropTypes.string,
  /**
   * Value to be copied on click
   */
  value: PropTypes.string,
  /**
   * Identifier of the temporary container for the copy function
   */
  containerId: PropTypes.string,
  /**
   * Tertiary button style
   */
  tertiary: PropTypes.bool,
  /**
   * TertiaryAlt button style
   */
  tertiaryAlt: PropTypes.bool,
  /**
   * Show the default label as per design guidelines
   */
  defaultLabel: PropTypes.bool
};

export default ACopyButton;
