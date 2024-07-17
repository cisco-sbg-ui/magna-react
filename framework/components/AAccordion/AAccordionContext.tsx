import React, {Dispatch, SetStateAction} from "react";

interface AAccordionContextProps {
  openedPanels: number[];
  setOpenedPanels: Dispatch<SetStateAction<number[]>>;
}

const AAccordionContext = React.createContext<AAccordionContextProps>({
  openedPanels: [],
  setOpenedPanels: () => []
});

export default AAccordionContext;
