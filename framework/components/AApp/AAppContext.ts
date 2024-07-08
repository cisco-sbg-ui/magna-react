import React, {RefObject} from "react";
import {ARef} from "../../types";

interface AAppContextType {
  appRef: RefObject<HTMLElement>;
  wrapRef: ARef;
  withNewWrappingContext: boolean;
}

const AAppContext = React.createContext<AAppContextType>({
  appRef: {current: null},
  wrapRef: {
    current: ""
  },
  withNewWrappingContext: false
});

export default AAppContext;
