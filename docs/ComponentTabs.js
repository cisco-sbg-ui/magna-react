import Link from "next/link";
import {ATab, ATabGroup} from "../framework";
import {forwardRef} from "react";

const toKebabCase = (str) => str.replaceAll(" ", "-").toLowerCase();

const ComponentTabs = ({tabs, onTabClick, activeTab}, ref) => {
  return (
    <ATabGroup className="mb-6" ref={ref}>
      {tabs.map((tab) => {
        const kebabTab = toKebabCase(tab);
        return (
          <Link key={kebabTab} href={`#${kebabTab}`}>
            <ATab
              onClick={(e) => {
                onTabClick(kebabTab, e);
              }}
              selected={activeTab === kebabTab}
              tabKey={kebabTab}
            >
              {tab}
            </ATab>
          </Link>
        );
      })}
    </ATabGroup>
  );
};

export default forwardRef(ComponentTabs);
