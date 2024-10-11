import React from "react";

import {type APopoverProps} from "./types";

declare const APopover: <C extends React.ElementType = "div">(
  props: APopoverProps
) => JSX.Element;

export default APopover;
