import {type ACopyButtonProps} from "./types";

declare const ACopyButton: <C extends React.ElementType>(
  props: ACopyButtonProps<C>
) => JSX.Element;

export default ACopyButton;
