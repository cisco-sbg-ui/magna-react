import React from "react";
import {ADrawerProps} from "./types";

declare const ADrawer: <C extends React.ElementType = "div">(
  props: ADrawerProps<C>
) => JSX.Element;

export default ADrawer;
