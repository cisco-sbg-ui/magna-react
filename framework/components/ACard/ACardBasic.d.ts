import React from "react";
import {type ACardBasicProps} from "./types";

declare const ACardBasic: <C extends React.ElementType = "div">(
  props: ACardBasicProps<C>
) => JSX.Element;

export default ACardBasic;
