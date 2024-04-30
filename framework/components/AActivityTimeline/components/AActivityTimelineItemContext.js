import {createContext} from "react";

const AActivityTimelineContext = createContext({
  isCollapsed: false,
  isCollapsible: false,
  open: () => {},
  close: () => {}
});

export default AActivityTimelineContext;
