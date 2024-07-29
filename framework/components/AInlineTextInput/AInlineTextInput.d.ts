import React from "react";

import {type AInlineTextInputProps} from "./types";

declare const AInlineTextInput: <C extends React.ElementType>(
  props: AInlineTextInputProps<C>
) => JSX.Element;

export default AInlineTextInput;
