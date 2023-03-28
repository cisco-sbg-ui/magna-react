import React from "react";
import AInlineInputBase, {AInlineInputBasePropTypes} from "../AInlineInputBase";
import ATextInput from "../ATextInput";

const AInlineTextInput = (props) => {
  return <AInlineInputBase {...props} inputComponent={ATextInput} />;
};

AInlineTextInput.displayName = "AInlineTextInput";

AInlineTextInput.propTypes = AInlineInputBasePropTypes;

export default AInlineTextInput;
