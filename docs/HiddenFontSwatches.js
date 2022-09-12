import React from "react";

const HiddenFontSwatches = () => (
  <div
    aria-hidden="true"
    className="hidden-font-swatches"
    style={{position: "fixed", top: -50}}>
    <span
      className="hidden-font-swatches_1"
      style={{fontFamily: "CiscoSans", fontWeight: 100}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_2"
      style={{fontFamily: "CiscoSans", fontWeight: 200}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_3"
      style={{
        fontFamily: "CiscoSans",
        fontWeight: 200,
        fontStyle: "oblique"
      }}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_4"
      style={{fontFamily: "CiscoSans", fontWeight: 200, fontStyle: "italic"}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_5"
      style={{fontFamily: "CiscoSans", fontWeight: 300}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_6"
      style={{
        fontFamily: "CiscoSans",
        fontWeight: 300,
        fontStyle: "oblique"
      }}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_7"
      style={{fontFamily: "CiscoSans", fontWeight: 300, fontStyle: "italic"}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_8"
      style={{fontFamily: "CiscoSans", fontWeight: 400}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_9"
      style={{
        fontFamily: "CiscoSans",
        fontWeight: 400,
        fontStyle: "oblique"
      }}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_10"
      style={{fontFamily: "CiscoSans", fontWeight: 400, fontStyle: "italic"}}>
      Theme
    </span>
    <span
      className="hidden-font-swatches_11"
      style={{fontFamily: "CiscoSans", fontWeight: 700}}>
      Theme
    </span>
  </div>
);

HiddenFontSwatches.displayName = "HiddenFontSwatches";

export default HiddenFontSwatches;
