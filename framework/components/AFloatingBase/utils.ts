import {type Placement} from "@floating-ui/react";

import {APlacement} from "../../types";

// Maps APlacement to floating-ui's placement strings for compatibility
export const mapPlacement = (placement: APlacement): Placement => {
  switch (placement) {
    case "top-right":
      return "top-end";
    case "right-top":
      return "right-start";
    case "right-bottom":
      return "right-end";
    case "bottom-right":
      return "bottom-end";
    case "bottom-left":
      return "bottom-start";
    case "left-bottom":
      return "left-end";
    case "left-top":
      return "left-start";
    case "top-left":
      return "top-start";

    default:
      return placement;
  }
};
