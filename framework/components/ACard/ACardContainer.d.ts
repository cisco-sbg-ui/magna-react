import React from "react";
import {type ACardContainerProps} from "./types";

declare const ACardContainer: <C extends React.ElementType = "div">(
  props: ACardContainerProps<C>
) => JSX.Element;

export default ACardContainer;
