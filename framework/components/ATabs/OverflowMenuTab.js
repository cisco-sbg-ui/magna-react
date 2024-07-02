import React, {useState, useRef, useEffect} from "react";
import ATab from "./ATab";
import AIcon from "../AIcon";
import AMenu from "../AMenu";

const OverflowMenuTab = ({tabGroupRef, passthroughRef, children}) => {
  const menuRef = useRef(null);
  const tabRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = menuOpen ? "caret-up" : "caret-down";
  const hasSelected = useRef(false);

  passthroughRef.current = {setMenuOpen};

  //Force remove tab styles on nested children with links.
  useEffect(() => {
    const isTab = document.querySelectorAll(".a-list-item a");
    const isNestedTab = document.querySelectorAll(
      ".a-list-item a .a-tab-group__tab"
    );

    if (isTab?.length) {
      isTab.forEach((item) => {
        if (item.classList.contains("a-tab-group__tab")) {
          item.className = "";
        }
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
    const menuTabEl = tabRef.current;

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
        ref={tabRef}
        data-set="menu"
        className={`a-tab-group__menu-tab ${!children.length ? "hide" : ""}`}
        selected={menuOpen || hasSelected.current}
        onClick={() => {
          setMenuOpen(!menuOpen);

          if (!menuOpen) {
            tabGroupRef.current?.blur();
            menuRef.current?.focus();
          } else {
            tabGroupRef.current?.focus();
          }
        }}
      >
        More <AIcon>{menuIcon}</AIcon>
      </ATab>
      <AMenu
        ref={menuRef}
        className="tab-overflow-menu"
        anchorRef={tabRef}
        open={menuOpen}
        closeOnClick
        placement="bottom"
        onClose={() => {
          setMenuOpen(false);

          tabGroupRef.current?.focus();
        }}
      >
        {children}
      </AMenu>
    </>
  );
};

export default OverflowMenuTab;
