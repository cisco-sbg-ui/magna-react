/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {forwardRef, useRef, useState} from "react";
import PropTypes from "prop-types";
import AButton from "../AButton/AButton";
import AContextualNotification from "../AContextualNotification/AContextualNotification";
import AIcon from "../AIcon/AIcon";
import ATriggerTooltip from "../ATriggerTooltip/ATriggerTooltip";
import {copyToClipboard} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";

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
      messageCloseDelay = 3000,
      ...rest
    },
    ref
  ) => {
    const [clicked, setClicked] = useState(false);
    const buttonRef = useRef();
    const combinedRef = useCombinedRefs(ref, buttonRef);

    let tooltipClassName = "a-copy-button-tooltip";

    if (clicked) {
      tooltipClassName += " a-copy-button-tooltip--copied a-tooltip--context";
    }

    const buttonType = {
      tertiary: !tertiaryAlt,
      tertiaryAlt
    };

    return (
      <>
        <AButton
          ref={combinedRef}
          className="a-copy-button"
          icon
          onClick={() => {
            copyToClipboard(value, containerId);
            setClicked(true);
          }}
          {...buttonType}
          {...rest}
        >
          <AIcon left={!!children || defaultLabel}>copy</AIcon>
          {children || (defaultLabel && "Copy")}
        </AButton>
        <ATriggerTooltip
          open
          triggerRef={combinedRef}
          disabled={!clicked}
          className={tooltipClassName}
          openDelay={0}
          content={
            <AContextualNotification variant="success">
              Copied to clipboard
            </AContextualNotification>
          }
          onClose={() => {
            setClicked(false);
          }}
        />
        <ATriggerTooltip
          triggerRef={combinedRef}
          disabled={clicked}
          className={tooltipClassName}
          content="Copy to clipboard"
        />
      </>
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
  defaultLabel: PropTypes.bool,
  /**
   * Set the timeout of the copied message tooltip
   */
  timeout: PropTypes.number
};

export default ACopyButton;
