import {AComboboxProps} from "./types";

declare const ACombobox: <T extends AComboboxItem>(
  props: AComboboxProps<T>
) => JSX.Element;

export default ACombobox;
