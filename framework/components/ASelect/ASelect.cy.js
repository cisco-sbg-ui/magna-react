import ASelect from "./ASelect";

const getMenu = () => cy.get(".a-menu-base");
const getSelectedItem = () => cy.get(".a-select__selection");
const openSelect = () => getSelectedItem().click();

describe("<ASelect />", () => {
  describe("when passing an array of strings for items", () => {
    it("should render all the items", () => {
      cy.mount(<StringItemsTest />);
      openSelect();
      cy.get('[role="option"]').should("have.length", 10);
    });

    it("should focus to the menu when opened", () => {
      cy.mount(<StringItemsTest />);
      openSelect();
      cy.get(".a-menu").should("have.focus");
    });

    it("should select the clicked item", () => {
      cy.mount(<StringItemsTest />);
      openSelect();
      cy.get('[role="option"]').eq(2).click();
      getSelectedItem().contains("2");
    });

    it("should tab through the options", () => {
      cy.mount(<StringItemsTest />);
      openSelect()
        .downArrowKeydown()
        .contains("0")
        .downArrowKeydown()
        .contains("1")
        .downArrowKeydown()
        .contains("2")
        .downArrowKeydown()
        .contains("3")
        .downArrowKeydown()
        .contains("4")
        .downArrowKeydown()
        .contains("5")
        .downArrowKeydown()
        .contains("6")
        .downArrowKeydown()
        .contains("7")
        .downArrowKeydown()
        .contains("8")
        .downArrowKeydown()
        .contains("9")
        .downArrowKeydown()
        .contains("0");
    });

    it("should select the item on enter keydowns", () => {
      cy.mount(<StringItemsTest />);
      openSelect();
      cy.get('[role="option"]').eq(2).enterKeydown();
      getSelectedItem().contains("2");
    });
  });

  describe("when passing an array of objects as items", () => {
    it("should render all the items", () => {
      cy.mount(<ObjectItemsTest />);
      openSelect();
      cy.get('[role="option"]').should("have.length", 10);
    });

    it("should focus to the menu when opened", () => {
      cy.mount(<ObjectItemsTest />);
      openSelect();
      cy.get(".a-menu").should("have.focus");
    });

    it("should select the clicked item", () => {
      cy.mount(<ObjectItemsTest />);
      openSelect();
      cy.get('[role="option"]').eq(2).click();
      getSelectedItem().contains("item 2");
    });

    it("should tab through the options", () => {
      cy.mount(<ObjectItemsTest />);
      openSelect()
        .downArrowKeydown()
        .contains("0")
        .downArrowKeydown()
        .contains("1")
        .downArrowKeydown()
        .contains("2")
        .downArrowKeydown()
        .contains("3")
        .downArrowKeydown()
        .contains("4")
        .downArrowKeydown()
        .contains("5")
        .downArrowKeydown()
        .contains("6")
        .downArrowKeydown()
        .contains("7")
        .downArrowKeydown()
        .contains("8")
        .downArrowKeydown()
        .contains("9")
        .downArrowKeydown()
        .contains("0");
    });

    it("should select the item on enter keydowns", () => {
      cy.mount(<ObjectItemsTest />);
      openSelect();
      cy.get('[role="option"]').eq(2).enterKeydown();
      getSelectedItem().contains("item 2");
    });
  });

  describe("when rendered with validation rules", () => {
    const validationRules = {
      rules: [
        {
          test: (item) => {
            if (!item) return true;
            return item.id == 5 || "test error";
          },
          level: "warning"
        }
      ]
    };

    it("should accept validation rules as props", () => {
      cy.mount(<ObjectItemsTest {...validationRules} />);

      openSelect();
      cy.get('[role="option"]').eq(2).enterKeydown();
      cy.get(".a-alert--state-warning").should("exist");
    });

    it("should add validation rule props to internal validation rules", () => {
      cy.mount(<ObjectItemsTest {...validationRules} required />);

      // First check for required validation rule
      openSelect();
      cy.get("body").click();
      cy.get(".a-alert--state-danger").should("exist");

      // Now check for custom validation rule
      getSelectedItem().click();
      cy.get('[role="option"]').eq(2).enterKeydown();
      cy.get(".a-alert--state-warning").should("exist");
    });

    it("should delay validation error messages if specified for blur", () => {
      cy.mount(<ObjectItemsTest {...validationRules} validateOnBlur={true} />);

      openSelect();

      // Select an invalid item and ensure error is not displayed
      cy.get('[role="option"]').eq(2).click();
      cy.get(".a-alert--state-warning").should("not.exist");

      // Blur off of select input and check for error
      getSelectedItem().blur();
      cy.get(".a-alert--state-warning").should("exist");
    });

    it("should support automatic required value validation", () => {
      cy.mount(<ObjectItemsTest required />);

      // Focus to input and immediately tab out to make input dirty
      openSelect();
      cy.get("body").click();
      cy.get(".a-alert--state-danger").should("exist");
    });
  });

  describe("when rendered as readOnly", () => {
    it("should not open the menu", () => {
      cy.mount(<ObjectItemsTest readOnly />);

      openSelect();
      cy.get('[role="option"]').should("have.length", 0);
    });

    it("should not allow the user to use arrow keys to select items", () => {
      cy.mount(<ObjectItemsTest readOnly />);

      cy.downArrowKeydown().downArrowKeydown().downArrowKeydown();
      getSelectedItem().contains("test");
    });
  });
});

const stringTestItems = [...new Array(10).keys()].map(String);

function StringItemsTest(selectProps) {
  return (
    <ASelect
      data-testid="select-trigger"
      items={stringTestItems}
      itemValue="id"
      itemText="name"
      placeholder="test"
      {...selectProps}
    />
  );
}

const objectTestItems = stringTestItems.map((id) => ({
  id,
  name: `item ${id}`
}));

function ObjectItemsTest(selectProps) {
  return (
    <div data-testid="test-container" style={{height: "900px"}}>
      <ASelect
        data-testid="select-trigger"
        items={objectTestItems}
        itemValue="id"
        itemText="name"
        placeholder="test"
        {...selectProps}
      />
    </div>
  );
}
