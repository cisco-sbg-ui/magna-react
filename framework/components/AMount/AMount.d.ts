import React from "react";

import {type AMountProps} from "./types";

declare const AMount: <C extends React.ElementType = "div">(
  props: AMountProps<C>
) => JSX.Element;

export default AMount;
