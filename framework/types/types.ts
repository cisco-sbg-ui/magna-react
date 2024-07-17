import React from "react";

export type ARef =
  | React.RefObject<HTMLElement>
  | {
      current?: unknown;
    };

export type AAnchorRef =
  | React.RefObject<HTMLElement>
  | {
      x?: number;
      y?: number;
      width?: number;
      height?: number;
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };

export type APlacement =
  | "top"
  | "top-right"
  | "right-top"
  | "right"
  | "right-bottom"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left-bottom"
  | "left"
  | "left-top"
  | "top-left";
