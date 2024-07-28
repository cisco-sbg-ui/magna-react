import {type ADropdownProps} from "./types";

declare const ADropdown: <C extends React.ElementType>(
  props: ADropdownProps<C>
) => React.ReactElement;

export default ADropdown;
