import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {AButton, ADivider, AIcon, ATree, useATheme} from "../framework";

import ThemeSwitcher from "./ThemeSwitcher";

const CustomLink = ({children, href, ...rest}) => {
  return (
    <Link href={href} passHref {...rest}>
      {children}
    </Link>
  );
};

const GitHubIcon = (props) => {
  let {styleColor} = props;
  return (
    <AButton
      className={`${styleColor}`}
      icon
      tertiaryAlt
      href="https://www.github.com/cisco-sbg-ui/magna-react"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <AIcon>github</AIcon>
    </AButton>
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
        contentProps: {
          href: "/"
        },
        active: "/" === currentDoc.route
      },
      {
        content: "Changelog",
        contentComponent: CustomLink,
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
            href: item.route + "#" + heading.toLowerCase().replace(/ /g, "-")
          },
          content: heading
        }))
      });
    });

    setItems(newItems);
  }, [menus, currentDoc]);

  return (
    <div
      className={`root-sidebar overflow-y-scroll py-3${
        currentTheme === "dusk"
          ? " mds-dark-theme--background"
          : " mds-light-theme--background"
      }`}
      style={{
        position: "fixed",
        height: "100%",
        width: 330
      }}
    >
      <div
        className={`${currentTheme === "dusk" ? "white--text" : "black--text"}`}
        style={{display: "flex", padding: "0 15px"}}
      >
        <h1 style={{flex: "1"}}>
          <AIcon size={60} className="pr-3 vertical-align-center">
            cisco
          </AIcon>
          Magna-React
        </h1>
        <GitHubIcon />
      </div>
      <div className={`${styleColor} d-flex align-center px-3 py-2}`}>
        <ThemeSwitcher />
      </div>
      <ADivider />
      <ATree
        className={`${styleColor}`}
        hoverable
        activatable
        expandOnClick
        items={menus ? items : []}
        onChange={(x) => setItems(x)}
      />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
