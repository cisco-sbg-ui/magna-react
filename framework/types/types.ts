export type ARef = {
  current?: unknown;
};

export type ADOMRect = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type ADOMRectFull = {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type AAnchorRef = ARef | ADOMRect;

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
