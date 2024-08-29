import React from "react";
import {type AMenuProps} from "./types";

declare const AMenu: <C extends React.ElementType = "div">(
  props: AMenuProps<C>
) => JSX.Element;

export default AMenu;
