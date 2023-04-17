import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {
  AButton,
  ADrawer,
  ADrawerContent,
  AIcon,
  useATheme,
  useMediaQuery,
  usePopupQuickExit
} from "../framework";

import "./Sidebar.scss";
import SidebarTree from "./SidebarTree";

const CustomLink = ({children, href, ...rest}) => {
  return (
    <Link href={href} passHref>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const Sidebar = ({
  menus,
  currentDoc,
  isSlim,
  isDrawerOpen,
  setIsDrawerOpen
}) => {
  const ref = useRef();
  usePopupQuickExit({
    popupRef: ref,
    isEnabled: isDrawerOpen,
    onExit: () => setIsDrawerOpen(false)
  });
  const {matches: isMobile} = useMediaQuery("(max-width: 1000px)");
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
          href: "/",
          className: "pl-0"
        },
        active: "/" === currentDoc.route
      },
      {
        content: "Changelog",
        contentComponent: CustomLink,
        customIcon: "list-bullets",
        contentProps: {
          href: "/changelog",
          className: "pl-0"
        },
        active: "/changelog" === currentDoc.route
      },
      {
        content: "Components",
        items: [],
        expanded: currentDoc.route.startsWith("/components/"),
        className: "pl-0",
        customIcon: "puzzle-piece"
      },
      {
        content: "Hooks",
        items: [],
        expanded: currentDoc.route.startsWith("/hooks/"),
        className: "pl-0",
        customIcon: "troubleshoot"
      },
      {
        content: "Extend",
        items: [],
        expanded: currentDoc.route?.startsWith("/extend/"),
        customIcon: "arrows-out"
      },
      {
        content: "Services",
        items: [],
        expanded: currentDoc.route?.startsWith("/services/"),
        customIcon: "plugs"
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

  if (isMobile) {
    return (
      <ADrawer
        isOpen={isDrawerOpen}
        withTransitions={false}
        id="sidebar"
        aria-labelledby="title"
        className={`root-sidebar py-4 sidebar`}
        openWidth="300px"
        style={{
          height: "100%",
          overflowY: "scroll"
        }}>
        <ADrawerContent
          style={{
            height: "100%"
          }}
          ref={ref}
          className="pt-0">
          <div className="d-flex align-center justify-space-between">
            <h3 id="title">Navigation</h3>
            <AButton
              className="text-align--right align-self-end"
              icon
              tertiaryAlt
              onClick={() => setIsDrawerOpen(false)}>
              <AIcon size={24}>x</AIcon>
            </AButton>
          </div>
          <SidebarTree
            className={`${styleColor}`}
            hoverable
            activatable
            expandOnClick
            items={menus ? items : []}
            onChange={(x) => setItems(x)}
          />
        </ADrawerContent>
      </ADrawer>
    );
  }

  return (
    <ADrawer
      slim={isSlim}
      slimWidth="50px"
      withTransitions={false}
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
      }}>
      <ADrawerContent
        style={{
          transition: "all 0.5s ease"
        }}
<<<<<<< HEAD
        className="pa-0">
        <SidebarTree
          className={`${styleColor}`}
=======
        className="pa-0"
      >
        <SidebarTree
          className={`${styleColor} px-4`}
>>>>>>> 725c65f (docs: adjust sidebar tree styling)
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
