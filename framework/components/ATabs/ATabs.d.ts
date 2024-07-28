import {type ATabProps} from "./types";

declare const ATab: <C extends React.ElementType = "div">(
  props: ATabProps<C>
) => JSX.Element;

export default ATab;
