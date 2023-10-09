import React, {useState, useRef, useEffect} from "react";
import ATab from "./ATab";
import AIcon from "../AIcon";
import AMenu from "../AMenu";

const OverflowMenuTab = ({children}) => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = menuOpen ? "caret-up" : "caret-down";
  const hasSelected = useRef(false);

  //If overflow item is selected, let menu know to maintain selected state once closed.
  useEffect(() => {
    for (let child of children) {
      if (child.props.selected) {
        hasSelected.current = child.props.selected;
        break; //Skip out once we find the first selected item.
      } else {
        hasSelected.current = false;
      }
    }
  }, [children]);

  return (
    <>
      <ATab
        ref={menuRef}
        data-set="menu"
        className="menu-tab"
        selected={menuOpen || hasSelected.current}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        More <AIcon>{menuIcon}</AIcon>
      </ATab>
      <AMenu
        className="tab-overflow-menu"
        anchorRef={menuRef}
        open={menuOpen}
        closeOnClick={false}
        placement="bottom"
        onClose={() => setMenuOpen(false)}
      >
        {children}
      </AMenu>
    </>
  );
};

export default OverflowMenuTab;
