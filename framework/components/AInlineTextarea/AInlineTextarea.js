import React from "react";
import AInlineInputBase, {AInlineInputBasePropTypes} from "../AInlineInputBase";
import ATextarea from "../ATextarea";

const AInlineTextarea = (props) => {
  return <AInlineInputBase {...props} inputComponent={ATextarea} />;
};

AInlineTextarea.propTypes = AInlineInputBasePropTypes;

AInlineTextarea.displayName = "AInlineTextarea";

export default AInlineTextarea;
