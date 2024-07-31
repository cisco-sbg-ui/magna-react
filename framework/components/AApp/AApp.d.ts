import React from "react";

import {type AAppProps} from "./types";

declare const AApp: <C extends React.ElementType = "div">(
  props: AAppProps<C>
) => JSX.Element;

export default AApp;
