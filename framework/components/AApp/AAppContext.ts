import React, {RefObject} from "react";
import {ARef} from "../../types";

interface AAppContextProps {
  appRef: RefObject<HTMLElement>;
  wrapRef: ARef;
  withNewWrappingContext: boolean;
}

const AAppContext = React.createContext<AAppContextProps>({
  appRef: {current: null},
  wrapRef: {
    current: ""
  },
  withNewWrappingContext: false
});

export default AAppContext;
