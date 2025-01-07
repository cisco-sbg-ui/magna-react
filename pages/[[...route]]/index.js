import matter from "gray-matter";
import Head from "next/head";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import React, {useEffect, useRef, useState} from "react";

import {
  AApp,
  AAutoTheme,
  ACardContainer,
  AMount,
  useInView
} from "../../framework";
import Sidebar from "../../docs/Sidebar";
import PropsContext from "../../docs/PropsContext";

import MdxHeadings from "../../docs/MdxHeadings";
import * as MagnaReactComponents from "../../framework";
import * as DocsComponents from "../../docs";
import {useRouter} from "next/router";
import ComponentTitle from "../../docs/ComponentTitle";
import ComponentTabs from "../../docs/ComponentTabs";
import CodeBlock from "../../docs/CodeBlock";
import Header from "../../docs/Header";
import PropsHelper from "../../docs/PropsHelper";
import DocsPageContext from "../../docs/DocsPageContext";
import {
  getNestedChildrenText,
  removeTextFromChildren
} from "../../framework/utils/docs";

const components = {
  ...MagnaReactComponents,
  ...DocsComponents,
  ...MdxHeadings
};

import "./index.scss";

const toKebabCase = (str) => str.replaceAll(" ", "-").toLowerCase();

export default function DocsPage({currentDoc, menus, propsInfo}) {
  const {query} = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("usage");
  const [activeSection, setActiveSection] = useState();
  const [hasScrolledPastTabs, setHasScrolledPastTabs] = useState(false);
  const tableOfContentsRefs = useRef(new Map());
  const inViewRef = useInView(({inView}) => setHasScrolledPastTabs(!inView));

  // Force initial active tab to be set on client-side
  // This prevents server and client mismatches
  useEffect(() => {
    if (!currentDoc) {
      return;
    }

    const requestedTab = query?.page;
    const firstTab = Object.keys(currentDoc?.pageTabsMdx)[0];
    setActiveTab(requestedTab || firstTab);
    setIsDrawerOpen(false);
  }, [setActiveTab, currentDoc, query]);

  if (!currentDoc) {
    return null;
  }

  let content = (
    <MDXRemote
      {...(currentDoc?.pageTabsMdx[activeTab] || currentDoc.source)}
      components={{
        ...components,
        pre: (props) => {
          const language = props.children.props?.className?.split("-")[1];
          const code = props.children.props.children;
          return <CodeBlock code={code} language={language} />;
        },
        blockquote: (props) => {
          const {combined} = getNestedChildrenText(props.children);

          let level;

          if (combined.includes(":warning:")) {
            level = "warning";
          } else if (combined.includes(":danger:")) {
            level = "danger";
          } else if (combined.includes(":success:")) {
            level = "success";
          } else {
            level = "info";
          }

          const alertChildren = level
            ? removeTextFromChildren(props.children, `:${level}:`)
            : props.children;

          return (
            <MagnaReactComponents.AAlert
              level={level}
              className="d-flex mb-4 mt-4"
              dismissible={false}
            >
              {alertChildren}
            </MagnaReactComponents.AAlert>
          );
        },
        p: (props) => (
          // eslint-disable-next-line
          <p className="mt-4 mb-4" style={{fontSize: "1rem"}} {...props} />
        ),
        h2: (props) => (
          // eslint-disable-next-line
          <h2 className="mt-10 mb-6" style={{fontSize: "2rem"}} {...props} />
        ),
        h3: (props) => (
          // eslint-disable-next-line
          <h3 className="mt-10 mb-6" style={{fontSize: "1.5rem"}} {...props} />
        ),
        h4: (props) => (
          <MagnaReactComponents.AInView
            rootMargin="-70px 0px -90% 0px"
            //rootMargin="0px 0px -95%"
            threshold={0}
            onChange={(stuff) => {
              const {entry, inView} = stuff;
              if (!entry) {
                return;
              }
              const sectionId = entry?.target?.getAttribute("id");

              if (inView && activeSection !== sectionId) {
                setActiveSection(sectionId);
              }
            }}
          >
            {/* eslint-disable-next-line */}
            <h4 className="mt-6 mb-4" style={{fontSize: "1.2rem"}} {...props} />
          </MagnaReactComponents.AInView>
        ),
        h5: (props) => (
          // eslint-disable-next-line
          <h5 className="mt-6 mb-5" style={{fontSize: "1rem"}} {...props} />
        )
      }}
    />
  );

  if (currentDoc.useContainer) {
    content = <ACardContainer>{content}</ACardContainer>;
  }

  return (
    <>
      <Head>
        <title>{`${currentDoc.name} | magna-react`}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AApp persistTheme>
        <AAutoTheme>
          <div id="container">
            <Header
              onHamburgerClick={() => {
                setIsDrawerOpen(true);
              }}
              className="col"
            />

            <Sidebar
              setIsDrawerOpen={setIsDrawerOpen}
              isDrawerOpen={isDrawerOpen}
              currentDoc={currentDoc}
              menus={menus}
            />

            <div id="component-page">
              <AMount withNewWrappingContext={true}>
                <PropsContext.Provider value={propsInfo}>
                  <DocsPageContext.Provider
                    value={{
                      registerCodePlayground: (name) => (ref) => {
                        if (!name) {
                          return;
                        }
                        tableOfContentsRefs.set(name, ref);
                      },
                      componentName: currentDoc.title
                    }}
                  >
                    <MagnaReactComponents.AInView
                      threshold={0}
                      onChange={(stuff) => {
                        if (stuff.inView) {
                          setActiveSection(null);
                        }
                      }}
                    >
                      <ComponentTitle
                        sourceCodeLink={currentDoc.sourceCodeLink}
                        title={currentDoc.title}
                      />
                    </MagnaReactComponents.AInView>
                    <ComponentTabs
                      ref={inViewRef}
                      tabs={currentDoc.tabs}
                      onTabClick={setActiveTab}
                      activeTab={activeTab}
                    />
                    {content}
                    <PropsHelper
                      componentName={currentDoc.title}
                      components={currentDoc.components}
                      shouldShowBtn={hasScrolledPastTabs}
                      currentDoc={currentDoc}
                    />
                  </DocsPageContext.Provider>
                </PropsContext.Provider>
              </AMount>
            </div>
          </div>
        </AAutoTheme>
      </AApp>
    </>
  );
}

export async function getStaticPaths() {
  const fs = require("fs");
  const paths = require("glob")
    .sync("./framework/**/*.mdx")
    .map((x) => {
      const file = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
      const {data} = matter(file);
      if (data.route === "/") {
        return {
          params: {route: false}
        };
      }

      return data.route;
    });

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({params}) {
  const route = params.route?.join("/") || "";
  const fs = require("fs");
  const glob = require("glob");
  const reactDocs = require("react-docgen");
  const reactDocsTypescript = require("react-docgen-typescript");
  const tsConfigParser = reactDocsTypescript.withCustomConfig(
    "./tsconfig.json",
    {
      savePropValueAsString: true,
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop /*, component*/) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              return !declaration.fileName.includes("node_modules");
            }
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      }
    }
  );

  let target;
  const menus = glob.sync("./framework/**/*.mdx").map((x) => {
    const file = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
    const {content, data} = matter(file);

    if (data?.route === `/${route}`) {
      target = {content, data};
    }

    const headings = [...content.matchAll(/[^#]+## ([^\r\n]+)/g)].map(
      (y) => y[1]
    );

    const h2Pattern = /##\s+(.+)[\r\n]+([\s\S]*?)(?=\n\n## |$)/g;
    const h4Pattern = /####\s+(.+)[\r\n]+([\s\S]*?)(?=\n\n#### |$)/g;

    const h2Matches = [...content.matchAll(h2Pattern)];

    const tabsWithContent = h2Matches.map((match) => {
      const heading = match[1];
      const tabContent = match[2].trim();

      const h4Matches = [...tabContent.matchAll(h4Pattern)];

      const tableOfContents = h4Matches.map((match) => {
        const entry = match[1];
        return {heading: entry};
      });

      return {heading, content: tabContent, tableOfContents};
    });

    return {
      ...data,
      headings,
      tabsWithContent
    };
  });

  const propsInfo = glob
    .sync("./framework/**/+(A)!(*.spec|*.ct|*.cy|*Context).js")
    .map((x) => {
      const componentSource = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
      return reactDocs.parse(componentSource);
    });

  let typescriptPropsInfo = glob
    .sync("./framework/**/+(A)!(*.spec|*.ct|*.cy|*Context).tsx")
    .map((x) => {
      return tsConfigParser.parse(x);
    });

  // This doesn't seem to parse, might not be supported
  // let types = reactDocsTypescript.parse("./framework/types.ts");

  // Can't serialize undefined, so change them to null
  typescriptPropsInfo.forEach((a) =>
    a.forEach((b) => {
      Object.keys(b.props).forEach((g) => {
        Object.keys(b.props[g]).forEach((p) => {
          if (b.props[g][p] === undefined) {
            b.props[g][p] = null;
          }
        });
      });
    })
  );

  typescriptPropsInfo = typescriptPropsInfo.map((t) => t[0]);

  propsInfo.push(...typescriptPropsInfo);

  const source = await serialize(target.content, {
    scope: target.data,
    // Uncomment to add IDs back to headings
    mdxOptions: {
      remarkPlugins: [require("remark-slug")]
    }
  });

  const targetMenu = menus.find((menu) => menu.route === `/${route}`);

  const getTabSectionSource = targetMenu.tabsWithContent.map(
    async (section) => {
      const sectionSource = await serialize(section.content, {
        mdxOptions: {
          remarkPlugins: [require("remark-slug")]
        }
      });
      return sectionSource;
    }
  );

  const tabSectionsSource = await Promise.all(getTabSectionSource);

  const pageTabsMdx = {};
  const pageTabsData = {};

  targetMenu.headings.forEach((heading, i) => {
    pageTabsMdx[toKebabCase(heading)] = tabSectionsSource[i];
  });

  targetMenu.tabsWithContent.forEach((tab) => {
    pageTabsData[toKebabCase(tab.heading)] = tab;
  });

  return {
    props: {
      currentDoc: {
        ...target.data,
        source,
        tabs: targetMenu.headings,
        pageTabsData,
        pageTabsMdx,
        tabSections: menus
          .filter((menu) => menu.route === `/${route}`)
          .map((menu) => menu.tabsWithContent)
          .flat()
      },
      menus,
      propsInfo,
      typescriptPropsInfo
    }
  };
}
