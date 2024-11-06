import React from "react";
import ATriggerBase from "../ATriggerBase/ATriggerBase";
import "../ATooltip/ATooltip.scss";

import {ATriggerTooltipProps} from "./types";

const ATriggerTooltip = ({...rest}: ATriggerTooltipProps) => {
  return <ATriggerBase baseClass="a-tooltip" {...rest} />;
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
