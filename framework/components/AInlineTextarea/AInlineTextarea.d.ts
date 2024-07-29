import React from "react";

import {AInlineTextareaProps} from "./types";

declare const AInlineTextarea: <C extends React.ElementType>(
  props: AInlineTextareaProps<C>
) => JSX.Element;

export default AInlineTextarea;
