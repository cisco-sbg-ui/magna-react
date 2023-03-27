import React from "react";
import AInlineTextInput from "./AInlineTextInput";
import ATextarea from "../ATextarea";

const AInlineTextarea = (props) => {
  return <AInlineTextInput {...props} inputComponent={ATextarea} />;
};

AInlineTextarea.displayName = "AInlineTextarea";

export default AInlineTextarea;
