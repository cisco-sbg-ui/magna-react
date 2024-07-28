import {type APopoverProps} from "./types";

declare const APopover: <C extends React.ElementType = "div">(
  props: APopoverProps<C>
) => JSX.Element;

export default APopover;
