import React from "react";

interface AAccordionPanelContextProps {
  hasBody: boolean;
  setHasBody: (hasBody: boolean) => void;
  panelId: number;
  setIsFocused: (isFocused: boolean) => void;
  panelKey?: string;
  isCollapsed: boolean;
  onToggle?: (key?: string) => void;
}

const AAccordionContext = React.createContext<AAccordionPanelContextProps>({
  hasBody: false,
  panelId: 1,
  isCollapsed: false,
  panelKey: "",
  setHasBody: () => {},
  setIsFocused: () => {},
  onToggle: () => {}
});

export default AAccordionContext;
