import {React} from "react";

import {type AListItemProps} from "./types";

declare const AListItem: <C extends React.ElementType = "div">(
  props: AListItemProps<C>
) => JSX.Element;

export default AListItem;
