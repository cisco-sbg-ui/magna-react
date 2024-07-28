import {type AButtonProps} from "./types";

declare const AButton: <C extends React.ElementType = "button">(
  props: AButtonProps<C>
) => JSX.Element;

export default AButton;
