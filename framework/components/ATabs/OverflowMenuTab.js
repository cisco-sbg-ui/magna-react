import React, {useState, useRef, useEffect, useCallback} from "react";
import ATab from "./ATab";
import AIcon from "../AIcon";
import AMenu from "../AMenu";
import {keyCodes} from "../../utils/helpers";

const OverflowMenuTab = ({
  children,
  menuOpen,
  setMenuOpen,
  handleDirectionalKeyDown,
  tabIndex,
  activeTabIndex,
  isMenuChildActive
}) => {
  const menuRef = useRef(null);
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

  return (
    <>
      <ATab
        ref={menuRef}
        data-set="menu"
        className={`menu-tab ${!children.length ? "hide" : ""}`}
        selected={menuOpen || hasSelected.current}
        onClick={() => setMenuOpen(!menuOpen)}
        tabIndex={tabIndex}
        handleDirectionalKeyDown={handleDirectionalKeyDown}
        activeTabIndex={activeTabIndex}
        isMenuChildActive={isMenuChildActive}
        aria-haspopup="menu"
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
        onKeyDown={(e) => {
          if ([keyCodes.esc].includes(e.keyCode)) {
            setMenuOpen(false);
          }
        }}
      >
        {children}
      </AMenu>
    </>
  );
};

export default OverflowMenuTab;
