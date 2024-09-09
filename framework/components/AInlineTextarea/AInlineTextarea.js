import React, {forwardRef} from "react";
import AInlineInputBase from "../AInlineInputBase";
import {AInlineInputBasePropTypes} from "../AInlineInputBase/AInlineInputBase";

import ATextarea from "../ATextarea";

const AInlineTextarea = forwardRef((props, ref) => {
  return <AInlineInputBase ref={ref} {...props} inputComponent={ATextarea} />;
});

AInlineTextarea.propTypes = AInlineInputBasePropTypes;

AInlineTextarea.displayName = "AInlineTextarea";

export default AInlineTextarea;
