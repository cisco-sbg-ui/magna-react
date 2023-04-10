import debounce from "lodash.debounce";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useReducer
} from "react";
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live";

import theme from "prism-react-renderer/themes/oceanicNext";

import * as AtomicReactComponentsAndHooks from "../framework";
import LoremIpsum from "../framework/utils/lorem-ipsum";
import mockImport from "./mock_modules";
const scope = {
  ...AtomicReactComponentsAndHooks,
  LoremIpsum,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useReducer,
  useState,
  debounce,
  mockImport
};

const Playground = ({
  withTwoPanes = false,
  code,
  fullWidthPreview,
  noInline
}) => {
  if (withTwoPanes) {
    return (
      <LiveProvider code={code.trim()} scope={scope} noInline={noInline}>
        <div className="d-flex mb-10">
          <div style={{flexBasis: "50%", flexShrink: "0", marginRight: "5px"}}>
            <LiveEditor
              theme={theme}
              style={{
                height: "100%",
                backgroundColor: "rgb(40, 44, 52)",
                borderRadius: "6px",
                padding: "10px",
                fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace"
              }}
            />
          </div>
          <AtomicReactComponentsAndHooks.ACardContainer
            className="d-flex align-center justify-center"
            style={{flexBasis: "50%", borderRadius: "6px"}}>
            <LiveError />
            <LivePreview />
          </AtomicReactComponentsAndHooks.ACardContainer>
        </div>
      </LiveProvider>
    );
  }

  return (
    <LiveProvider code={code.trim()} scope={scope} noInline={noInline}>
      <AtomicReactComponentsAndHooks.ACardContainer>
        <LiveError />
        <LivePreview />
      </AtomicReactComponentsAndHooks.ACardContainer>
      <div
        className="overflow-y-scroll black mt-2 mb-10"
        style={{borderRadius: "6px"}}>
        <LiveEditor
          theme={theme}
          style={{
            backgroundColor: "rgb(40, 44, 52)",
            padding: "10px",
            fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace"
          }}
        />
      </div>
    </LiveProvider>
  );
};

Playground.displayName = "Playground";

export default Playground;
