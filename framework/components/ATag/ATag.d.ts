import {type ATagProps} from "./types";

declare const ATag: <C extends React.ElementType = "div">(
  props: ATagProps<C>
) => JSX.Element;

export default ATag;
