import {type AModalProps} from "./types";

declare const AModal: <C extends React.ElementType = "div">(
  props: AModalProps<C>
) => JSX.Element;

export default AModal;
