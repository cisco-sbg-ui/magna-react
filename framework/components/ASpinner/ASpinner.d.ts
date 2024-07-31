import React from "react";

import {type ASpinnerProps} from "./types";

declare const ASpinner: <C extends React.ElementType = "div">(
  props: ASpinnerProps<C>
) => JSX.Element;

export default ASpinner;
