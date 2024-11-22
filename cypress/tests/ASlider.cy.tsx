import React, {useState} from "react";
import {ASlider, type ASliderProps} from "../../framework";

const ASliderTest = ({value: propsValue = 0, ...rest}: ASliderProps) => {
  const [value, setValue] = useState(propsValue);
  return (
    <ASlider
      data-testid="slider"
      label="Label"
      value={value}
      onChange={(v) => setValue(v)}
      hints={`Value: ${value}`}
      {...rest}
    />
  );
};

describe("<ASlider />", () => {
  it("should render with specifications", () => {
    cy.mount(
      <ASliderTest
        value={50}
        step={25}
        max={100}
        ticks={[0, 25, 50, 75, 100]}
      />
    );

    cy.get(".a-slider__tick-label").last().should("have.text", "100");
    cy.get("[aria-valuenow=50]").should("exist");
    cy.get("[role=slider]")
      .focus()
      .trigger("mousedown", {which: 1})
      .trigger("mousemove", {clientX: 1000, clientY: 0});
    cy.get("[aria-valuenow=75]").should("exist");
  });

  it("should move by 1 step with arrow key", () => {
    // Step has a value of 1, so it should move by 1 "tick", the previous above moves by 25, so the handler should move by 25 "ticks"
    // This is just making sure the step value is working properly and not jumping by several ticks.
    cy.mount(
      <ASliderTest value={25} step={1} max={100} ticks={[0, 25, 50, 75, 100]} />
    );

    cy.get("[aria-valuenow=25]").should("exist");
    cy.get("[role=slider]").focus().type("{leftArrow}");
    cy.get("[aria-valuenow=24]").should("exist");
  });

  it("should be in varying positions to match number", () => {
    cy.mount(
      <ASliderTest
        value={750}
        step={15}
        max={1000}
        ticks={[0, 10, 90, 250, 500, 750, 800, 840, 1000]}
      />
    );

    cy.get(".a-slider__tick-label").should(($els) => {
      expect($els[0].style.width).to.not.eq($els[1].style.width);
    });
  });

  it("should be evenly spaced if string tick", () => {
    cy.mount(
      <ASliderTest
        value={3}
        max={5}
        ticks={[
          "Strongly Disagree",
          "Disagree",
          "Neutral",
          "Agree",
          "Strongly Agree",
          "N/A"
        ]}
      />
    );

    cy.get(".a-slider__tick-label").should(($els) => {
      expect($els[0].style.width).to.eq($els[1].style.width);
    });
  });
});
