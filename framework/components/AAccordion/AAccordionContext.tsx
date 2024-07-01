import React, {Dispatch, SetStateAction} from "react";

interface AAccordionContextType {
  openedPanels: number[];
  setOpenedPanels: Dispatch<SetStateAction<number[]>>;
}

const AAccordionContext = React.createContext<AAccordionContextType>({
  openedPanels: [],
  setOpenedPanels: () => []
});

export default AAccordionContext;
