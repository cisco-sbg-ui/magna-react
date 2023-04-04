import matter from "gray-matter";
import Head from "next/head";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import React from "react";

import {
  AApp,
  AAutoTheme,
  ACol,
  AContainer,
  ARow,
  AMount
} from "../../framework";
import HiddenFontSwatches from "../../docs/HiddenFontSwatches";
import Sidebar from "../../docs/Sidebar";
import PropsContext from "../../docs/PropsContext";

import MdxHeadings from "../../docs/MdxHeadings";
import * as AtomicReactComponents from "../../framework";
import * as DocsComponents from "../../docs";

const components = {
  ...AtomicReactComponents,
  ...DocsComponents,
  ...MdxHeadings
};

export default function TestPage({currentDoc, menus, propsInfo}) {
  if (!currentDoc) return null;

  return (
    <>
      <Head>
        <title>{`${currentDoc.name} | magna-react`}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AApp persistTheme style={{minHeight: "100vh"}}>
        <AAutoTheme>
          <HiddenFontSwatches />
          <AContainer fluid className="pa-0">
            <ARow noGutters>
              <ACol style={{maxWidth: 330}}>
                <Sidebar currentDoc={currentDoc} menus={menus} />
              </ACol>
              <AMount>
                <ACol
                  className="pa-8"
                  style={{maxWidth: "calc(100vw - 347px)"}}
                >
                  <PropsContext.Provider value={propsInfo}>
                    <MDXRemote {...currentDoc.source} components={components} />
                  </PropsContext.Provider>
                </ACol>
              </AMount>
            </ARow>
          </AContainer>
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

  let target;
  const menus = glob.sync("./framework/**/*.mdx").map((x) => {
    const file = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
    const {content, data} = matter(file);

    if (data?.route === `/${route}`) {
      target = {content, data};
    }

    return {
      ...data,
      headings: [...content.matchAll(/[^#]+## ([^\r\n]+)/g)].map((y) => y[1])
    };
  });

  const propsInfo = glob
    .sync("./framework/**/+(A)!(*.spec|*.ct|*.cy|*Context).js")
    .map((x) => {
      const componentSource = fs.readFileSync(x, {encoding: "utf8", flag: "r"});
      return reactDocs.parse(componentSource);
    });

  const source = await serialize(target.content, {
    scope: target.data,
    mdxOptions: {
      remarkPlugins: [require("remark-slug")]
    }
  });

  return {
    props: {
      currentDoc: {
        ...target.data,
        source
      },
      menus,
      propsInfo
    }
  };
}
