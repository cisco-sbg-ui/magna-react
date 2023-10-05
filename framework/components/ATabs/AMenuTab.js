import React, {forwardRef, useState, useRef} from "react";
import ATab from "./ATab";
import AIcon from "../AIcon";
import AMenu from "../AMenu";
import AListItem from "../AList/AListItem";

const AMenuTab = forwardRef(({tabKey, children}) => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = menuOpen ? "caret-up" : "caret-down";

  const listItems = () => {
    return children.map((item) => {
      const href = item.nodeName.toLowerCase() === "a";
      if (href) {
        return (
          <AListItem tabKey={tabKey} key={`${item.innerHTML}-href`}>
            <a
              aria-selected={item.ariaSelected}
              role="tab"
              tabIndex="0"
              href={item.href}
              target={item.target || ""}
            >
              {item.innerHTML}
            </a>
          </AListItem>
        );
      } else {
        return (
          <AListItem tabKey={tabKey} key={item.innerHTML}>
            {item.innerHTML}
          </AListItem>
        );
      }
    });
  };

  return (
    <>
      <ATab
        ref={menuRef}
        data-set="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        More <AIcon>{menuIcon}</AIcon>
      </ATab>
      <AMenu
        className="menu-items"
        anchorRef={menuRef}
        open={menuOpen}
        closeOnClick={false}
        placement="bottom"
        onClose={() => setMenuOpen(false)}
      >
        {listItems()}
      </AMenu>
    </>
  );
});

AMenuTab.displayName = "AMenuTab";

export default AMenuTab;
