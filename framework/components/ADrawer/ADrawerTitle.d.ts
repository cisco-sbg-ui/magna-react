import {type ElementType} from "react";

import {type ADrawerTitleProps} from "./types";

declare const ADrawerTitle: <C extends ElementType>(
  props: ADrawerTitleProps<C>
) => JSX.Element;

export default ADrawerTitle;
