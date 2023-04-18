import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {ADrawer, ADrawerContent, useATheme} from "../framework";

import "./Sidebar.scss";
import SidebarTree from "./SidebarTree";

const CustomLink = ({children, href, ...rest}) => {
  return (
    <Link href={href} passHref>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const Sidebar = ({menus, currentDoc}) => {
  const [items, setItems] = useState([]);
  const currentDocRef = useRef();
  const {currentTheme} = useATheme();
  const styleColor = currentTheme === "dusk" ? "white--text" : "black--text";
  useEffect(() => {
    if (currentDocRef.current) {
      window.scrollTo(0, Math.max(0, currentDocRef.current.offsetTop - 65));
    }
  }, []);

  useEffect(() => {
    const newItems = [
      {
        content: "Getting Started",
        contentComponent: CustomLink,
        customIcon: "information",
        contentProps: {
          href: "/"
        },
        active: "/" === currentDoc.route
      },
      {
        content: "Changelog",
        contentComponent: CustomLink,
        customIcon: "list-bullets",
        contentProps: {
          href: "/changelog"
        },
        active: "/changelog" === currentDoc.route
      },
      {
        content: "Components",
        items: [],
        expanded: currentDoc.route.startsWith("/components/")
      },
      {
        content: "Hooks",
        items: [],
        expanded: currentDoc.route.startsWith("/hooks/")
      },
      {
        content: "Extend",
        items: [],
        expanded: currentDoc.route?.startsWith("/extend/")
      },
      {
        content: "Services",
        items: [],
        expanded: currentDoc.route?.startsWith("/services/")
      }
    ];

    menus?.forEach((item) => {
      const bucketIndex = item.route.startsWith("/components/")
        ? 2
        : item.route.startsWith("/hooks/")
        ? 3
        : item.route.startsWith("/extend/")
        ? 4
        : item.route.startsWith("/services/")
        ? 5
        : null;
      if (!bucketIndex) return;

      newItems[bucketIndex].items.push({
        content: item.name,
        contentComponent: CustomLink,
        contentProps: {
          href: item.route
        },
        active: item.route === currentDoc.route,
        expanded: item.route === currentDoc.route,
        items: item.headings.map((heading) => ({
          contentComponent: CustomLink,
          contentProps: {
            href:
              item.route + "?page=" + heading.toLowerCase().replace(/ /g, "-")
          },
          content: heading
        }))
      });
    });

    setItems(newItems);
  }, [menus, currentDoc]);

  return (
    <ADrawer
      position="relative"
      isOpen={true}
      id="sidebar"
      className={`root-sidebar py-4 sidebar`}
      openWidth={300 - 12}
      style={{
        height: "100%",
        overflowY: "auto",
        background: "inherit",
        boxShadow: "none"
      }}
    >
      <ADrawerContent
        style={{
          transition: "all 0.5s ease"
        }}
        className="pa-0"
      >
        <SidebarTree
          className={`${styleColor} px-4`}
          hoverable
          activatable
          expandOnClick
          items={menus ? items : []}
          onChange={(x) => setItems(x)}
        />
      </ADrawerContent>
    </ADrawer>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
