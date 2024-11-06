import React from "react";
import {ACardContainer} from "../ACard";
import ATriggerBase from "../ATriggerBase/ATriggerBase";
import "../APopover/APopover.scss";

import {ATriggerPopoverProps} from "./types";

const ATriggerPopover = ({
  content,
  openDelay = 300,
  container: ComponentContainer = ACardContainer,
  ...rest
}: ATriggerPopoverProps) => {
  return (
    <ATriggerBase
      baseClass="a-popover-floating-base"
      openDelay={openDelay}
      content={
        <ComponentContainer className="a-popover" {...rest}>
          {content}
        </ComponentContainer>
      }
      {...rest}
    />
  );
};

ATriggerPopover.displayName = "ATriggerPopover";

export default ATriggerPopover;
