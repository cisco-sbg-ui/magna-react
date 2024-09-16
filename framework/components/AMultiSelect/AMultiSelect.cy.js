import {useState} from "react";
import AMultiSelect from "./AMultiSelect";

const openWidget = () => cy.get(".a-field-base__label").click();
const getMenuContent = () => cy.get(".a-floating-menu-base");

const pressDownArrow = () => {
  return getMenuContent().downArrowKeydown();
};

const pressUpArrow = () => {
  return getMenuContent().upArrowKeydown();
};

describe("<AMultiSelect />", () => {
  it("should render", () => {
    cy.mount(<AMultiSelectTest />);

    getMenuContent().should("not.exist");
  });

  it("should open", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    getMenuContent().should("exist");
  });

  it("should respond to down arrow", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    pressDownArrow();

    cy.get(".a-list-item").first().should("have.focus");

    pressDownArrow();
    pressDownArrow();

    cy.get(".a-list-item").first().next().next().should("have.focus");
  });

  it("should respond to up arrow", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    pressUpArrow();

    cy.get(".a-list-item").last().should("have.focus");

    pressUpArrow();
    pressUpArrow();

    cy.get(".a-list-item").last().prev().prev().should("have.focus");
  });

  it("should select items on click", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    pressDownArrow();

    cy.focused().click();

    cy.get(".a-list-item .a-checkbox__input").first().should("be.checked");

    pressUpArrow();

    cy.focused().click();

    cy.get(".a-list-item .a-checkbox__input").last().should("be.checked");
  });

  it("should select items on enter", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    pressDownArrow();

    cy.focused().type("{enter}");

    cy.get(".a-list-item .a-checkbox__input").first().should("be.checked");

    pressUpArrow();

    cy.focused().type("{enter}");

    cy.get(".a-list-item .a-checkbox__input").last().should("be.checked");
  });

  it("should show items on counter hover", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    cy.get(".a-multiselect__input").type("fruit");

    pressDownArrow();

    cy.focused().click();

    cy.get(".a-tag").should("have.text", "1").trigger("mouseover");

    cy.get(".a-tooltip").should("be.visible").should("have.text", "Fruit");
  });

  it("should show tags", () => {
    cy.mount(<AMultiSelectTest withTags value={[1, 3]} />);

    cy.get(".a-tag")
      .first()
      .should("have.text", "Bread, Cereal, Rice, and Pasta");

    cy.get(".a-tag").last().should("have.text", "Fruit");
  });

  it("should clear", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    pressDownArrow();

    cy.focused().click();

    cy.get(".a-icon--x-circle").click();

    cy.get(".tag").should("not.exist");
  });

  it("should filter", () => {
    cy.mount(<AMultiSelectTest />);

    cy.get(".a-multiselect__input").type("fruit");

    cy.get(".a-list-item").its("length").should("eq", 1);
  });

  it("should show empty state when no matches", () => {
    cy.mount(<AMultiSelectTest />);

    cy.get(".a-multiselect__input").type("notanitem");

    cy.get(".a-empty-state").its("length").should("eq", 1);
  });

  it("should close on outside click", () => {
    cy.mount(
      <>
        <div className="close-test">Close test</div>
        <AMultiSelectTest />
      </>
    );

    openWidget();

    getMenuContent().should("exist");

    cy.get(".close-test").click();

    getMenuContent().should("not.exist");
  });

  it("should close on escape", () => {
    cy.mount(<AMultiSelectTest />);

    openWidget();

    getMenuContent().should("exist");

    getMenuContent().type("{esc}");

    getMenuContent().should("not.exist");
  });

  it("should show error when required", () => {
    cy.mount(<AMultiSelectTest required />);

    cy.get(".a-multiselect__input").focus();

    cy.get(".a-multiselect__input").blur();

    cy.get(".a-alert--state-danger").should("exist");
  });

  it("should show error when required with empty undefined value", () => {
    cy.mount(<AMultiSelectTest required value={undefined} />);

    cy.get(".a-multiselect__input").focus();

    cy.get(".a-multiselect__input").blur();

    cy.get(".a-alert--state-danger").should("exist");
  });

  it("should show error when required with empty array value", () => {
    cy.mount(<AMultiSelectTest required value={[]} />);

    cy.get(".a-multiselect__input").focus();

    cy.get(".a-multiselect__input").blur();

    cy.get(".a-alert--state-danger").should("exist");
  });
});

const items = [
  {id: 1, name: "Bread, Cereal, Rice, and Pasta"},
  {id: 2, name: "Vegetables"},
  {id: 3, name: "Fruit", selected: true},
  {id: 4, name: "Milk, Yogurt, and Cheese"},
  {id: 5, name: "Meat, Poultry, Fish", disabled: true},
  {id: 6, name: "Fats, Oils, and Sweets"}
];

const AMultiSelectTest = ({
  value: propsValue = [],
  withTags = false,
  ...rest
}) => {
  const [value, setValue] = useState(propsValue);

  return (
    <div
      className="d-flex justify-center align-center"
      style={{height: "100vh", width: "100vw"}}
    >
      <AMultiSelect
        data-testid="select-trigger"
        label="Food Group"
        withTags={withTags}
        items={items}
        itemValue="id"
        itemText="name"
        placeholder="Pick a Food Group"
        onSelected={(newValue) => {
          setValue(newValue);
        }}
        value={value}
        {...rest}
      />
    </div>
  );
};
