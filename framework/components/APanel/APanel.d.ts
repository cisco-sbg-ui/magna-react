import React from "react";

import {type APanelProps} from "./types";

declare const APanel: <C extends React.ElementType = "div">(
  props: APanelProps<C>
) => JSX.Element;

export default APanel;
