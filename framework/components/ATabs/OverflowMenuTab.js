import React, {useState, useRef, useEffect, useCallback} from "react";
import ATab from "./ATab";
import AIcon from "../AIcon";
import AMenu from "../AMenu";

const OverflowMenuTab = ({children}) => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = menuOpen ? "caret-up" : "caret-down";
  const hasSelected = useRef(false);

  //Force remove tab styles on nested children with links.
  useEffect(() => {
    const isTab = document.querySelectorAll(".a-list-item a");
    const isNestedTab = document.querySelectorAll(
      ".a-list-item a .a-tab-group__tab"
    );

    if (isTab?.length) {
      isTab.forEach((item) => {
        item.className = "";
      });
    }
    if (isNestedTab?.length) {
      isNestedTab.forEach((item) => {
        item.className = "";
      });
    }
  });

  //If overflow item is selected, let menu know to maintain selected state once closed.
  useEffect(() => {
    const menuTabEl = menuRef.current;

    for (let child of children) {
      const {props} = child;
      if (props.selected) {
        hasSelected.current = props.selected || props.children.props.selected;
        //Q: "Why not use react state for this?" - A: "It won't let me."
        menuTabEl.setAttribute("aria-selected", true);
        menuTabEl.classList.add("a-tab-group__tab--selected");
        break; //Skip out once we find the first selected item.
      } else if (!props.selected) {
        hasSelected.current = false;
        menuTabEl.setAttribute("aria-selected", false);
        menuTabEl.classList.remove("a-tab-group__tab--selected");
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
        closeOnClick
        placement="bottom"
        onClose={() => setMenuOpen(false)}
      >
        {children}
      </AMenu>
    </>
  );
};

export default OverflowMenuTab;
