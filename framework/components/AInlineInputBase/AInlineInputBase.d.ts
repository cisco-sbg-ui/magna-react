import {type AInlineInputBaseProps} from "./types";
import {AInlineInputBasePropTypes} from "./AInlineInputBase";

declare const AInlineInputBase: <C extends React.ElementType = "div">(
  props: AInlineInputBaseProps<C>
) => JSX.Element;

export {AInlineInputBasePropTypes};
export default AInlineInputBase;
