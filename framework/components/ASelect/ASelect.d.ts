import {ASelectProps, ASelectItem} from "./types";

declare const ASelect: <T extends ASelectItem>(
  props: ASelectProps<T>
) => JSX.Element;

export default ASelect;
