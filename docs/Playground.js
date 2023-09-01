import debounce from "lodash.debounce";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {LiveProvider, LiveEditor, LiveError, LivePreview} from "react-live";

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

const Playground = ({code, fullWidthPreview, noInline, previewStyle = {}}) => {
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
              style={{
                flexBasis: "50%",
                marginLeft: "50%",
                maxWidth: "50%",
                ...previewStyle
              }}
            >
              <LiveError />
              <LivePreview />
            </div>
          </>
        )}
        {fullWidthPreview && (
          <>
            <div className="pa-4 playground__preview" style={previewStyle}>
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
