import React from "react";

import {type AListProps} from "./types";

declare const AList: <C extends React.ElementType = "div">(
  props: AListProps<C>
) => JSX.Element;

export default AList;
