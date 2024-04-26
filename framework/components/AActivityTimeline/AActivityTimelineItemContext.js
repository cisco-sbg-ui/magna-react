import {createContext} from "react";

const AActivityTimelineContext = createContext({
  isExpanded: false,
  isExpandable: false,
  open: () => {},
  close: () => {}
});

export default AActivityTimelineContext;
