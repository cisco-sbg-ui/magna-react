import React from "react";
import {type AInlineInputBaseProps} from "./types";

declare const AInlineInputBase: <C extends React.ElementType = "div">(
  props: AInlineInputBaseProps<C>
) => JSX.Element;

export default AInlineInputBase;
