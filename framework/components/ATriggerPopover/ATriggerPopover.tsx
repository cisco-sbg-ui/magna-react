import React from "react";
import {APanel} from "../APanel";
import ATriggerBase from "../ATriggerBase/ATriggerBase";
import "../APopover/APopover.scss";

import {ATriggerPopoverProps} from "./types";

const ATriggerPopover = ({
  content,
  openDelay = 0,
  ...rest
}: ATriggerPopoverProps) => {
  return (
    <ATriggerBase
      baseClass="a-popover-floating-base"
      openDelay={openDelay}
      content={
        <APanel className="a-popover" {...rest} type="dialog">
          {content}
        </APanel>
      }
      {...rest}
    />
  );
};

ATriggerPopover.displayName = "ATriggerPopover";

export default ATriggerPopover;
