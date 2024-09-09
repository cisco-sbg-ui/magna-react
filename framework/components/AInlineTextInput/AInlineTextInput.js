import React, {forwardRef} from "react";
import AInlineInputBase from "../AInlineInputBase";
import {AInlineInputBasePropTypes} from "../AInlineInputBase/AInlineInputBase";

import ATextInput from "../ATextInput";

const AInlineTextInput = forwardRef((props, ref) => {
  return <AInlineInputBase ref={ref} {...props} inputComponent={ATextInput} />;
});

AInlineTextInput.displayName = "AInlineTextInput";

AInlineTextInput.propTypes = AInlineInputBasePropTypes;

export default AInlineTextInput;
