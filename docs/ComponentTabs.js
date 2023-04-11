import Link from "next/link";
import {ATab, ATabGroup} from "../framework";
import {forwardRef} from "react";
import {useRouter} from "next/router";

const toKebabCase = (str) => str.replaceAll(" ", "-").toLowerCase();

const ComponentTabs = ({tabs, onTabClick, activeTab}, ref) => {
  const {push, asPath} = useRouter();
  return (
    <ATabGroup className="mb-6" ref={ref}>
      {tabs.map((tab) => {
        const kebabTab = toKebabCase(tab);
        return (
          <ATab
            key={kebabTab}
            onClick={(e) => {
              e.preventDefault();
              push(`${asPath.split("?page=")[0]}?page=${kebabTab}`, undefined, {
                shallow: true
              });
              onTabClick(kebabTab, e);
            }}
            selected={activeTab === kebabTab}
            tabKey={kebabTab}
          >
            {tab}
          </ATab>
        );
      })}
    </ATabGroup>
  );
};

export default forwardRef(ComponentTabs);
