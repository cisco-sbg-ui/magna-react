import debounce from "lodash.debounce";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live";

import theme from "prism-react-renderer/themes/oceanicNext";

import * as AtomicReactComponentsAndHooks from "../framework";
import {AList} from "../framework";
import LoremIpsum from "../framework/utils/lorem-ipsum";
import mockImport from "./mock_modules";
const scope = {
  ...AtomicReactComponentsAndHooks,
  LoremIpsum,
  useCallback,
  useEffect,
  useMemo,
  useRef,
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
                backgroundColor: "rgb(40, 44, 52)",
                borderRadius: "6px",
                padding: "10px",
                fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace"
              }}
            />
          </div>
          <AtomicReactComponentsAndHooks.ACardContainer
            className="d-flex align-center justify-center"
            style={{flexBasis: "50%", borderRadius: "6px"}}
          >
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
        style={{borderRadius: "6px"}}
      >
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

  return (
    <LiveProvider code={code} scope={scope} noInline={noInline}>
      <AList
        className={`playground d-flex mb-8${
          fullWidthPreview ? " flex-column playground--full-width-preview" : ""
        }`}
        style={{
          minHeight: 300,
          position: "relative"
        }}
      >
        {!fullWidthPreview && (
          <>
            <div
              className="overflow-y-scroll black"
              style={{position: "absolute", width: "50%", top: 0, bottom: 0}}
            >
              <LiveEditor />
            </div>
            <div
              className="pa-4 playground__preview"
              style={{flexBasis: "50%", marginLeft: "50%", maxWidth: "50%"}}
            >
              <LiveError />
              <LivePreview />
            </div>
          </>
        )}
        {fullWidthPreview && (
          <>
            <div className="pa-4 playground__preview">
              <LiveError />
              <LivePreview />
            </div>
            <div className="overflow-y-scroll black" style={{maxHeight: 300}}>
              <LiveEditor />
            </div>
          </>
        )}
      </AList>
    </LiveProvider>
  );
};

Playground.displayName = "Playground";

export default Playground;
