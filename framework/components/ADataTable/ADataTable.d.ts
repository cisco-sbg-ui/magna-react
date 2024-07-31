import {type ADataTableProps} from "./types";

declare const ADataTable: <KEY extends string, DATA>(
  props: ADataTableProps<KEY, DATA>
) => JSX.Element;

export default ADataTable;
