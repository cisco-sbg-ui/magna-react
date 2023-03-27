import React, {forwardRef} from "react";
import AInlineTextInput from "./AInlineInput";
import ATextarea from "../ATextarea";

const AInlineTextarea = forwardRef((props, ref) => {
  return <AInlineTextInput ref={ref} {...props} inputComponent={ATextarea} />;
});

AInlineTextarea.displayName = "AInlineTextarea";

export default AInlineTextarea;
