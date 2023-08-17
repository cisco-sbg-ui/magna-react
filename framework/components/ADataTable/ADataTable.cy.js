import ADataTable from "../ADataTable/ADataTable";

const HEADERS = [
  {
    name: "Alpha",
    key: "a"
  },
  {
    name: "Bravo",
    key: "b",
    cell: {
      component: (item) => {
        return <input type="text" value={item.b} />;
      }
    }
  }
];

const ITEMS = [
  {
    a: 1428627663,
    b: "India"
  },
  {
    a: 1425671352,
    b: "China"
  },
  {
    a: 339996563,
    b: "United States"
  }
];

describe("ADataTable", async () => {
  describe("keyboardArrowSupport", () => {
    it("selects first line with arrow down and assign key-selected class to it", () => {
      const onKeyboardSelectStub = cy.stub();

      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: onKeyboardSelectStub
          }}
        />
      );

      cy.downArrowKeydown().then(() => {
        expect(onKeyboardSelectStub.callCount).to.eq(1);
        expect(onKeyboardSelectStub).to.be.calledWith({
          index: 0,
          item: ITEMS[0]
        });
        cy.get("table tbody tr:first").should(
          "have.class",
          "a-data-table__row--key-selected"
        );
      });
    });

    it("selects last line with arrow up and assign key-selected class to it", () => {
      const onKeyboardSelectStub = cy.stub();

      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: onKeyboardSelectStub
          }}
        />
      );

      cy.upArrowKeydown().then(() => {
        expect(onKeyboardSelectStub.callCount).to.eq(1);
        expect(onKeyboardSelectStub).to.be.calledWith({
          index: 2,
          item: ITEMS[2]
        });
        cy.get("table tbody tr:last").should(
          "have.class",
          "a-data-table__row--key-selected"
        );
      });
    });

    it("moves to second element after second arrow down click", () => {
      const onKeyboardSelectStub = cy.stub();

      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: onKeyboardSelectStub
          }}
        />
      );

      cy.downArrowKeydown().then(() => {
        expect(onKeyboardSelectStub.callCount).to.eq(1);
      });

      cy.downArrowKeydown().then(() => {
        expect(onKeyboardSelectStub.callCount).to.eq(2);
        expect(onKeyboardSelectStub.getCall(0)).to.be.calledWith({
          index: 0,
          item: ITEMS[0]
        });
        expect(onKeyboardSelectStub.getCall(1)).to.be.calledWith({
          index: 1,
          item: ITEMS[1]
        });
        cy.get("table tbody tr:nth-child(2)").should(
          "have.class",
          "a-data-table__row--key-selected"
        );
      });
    });

    it("focus fist row after arrow down", () => {
      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: cy.stub()
          }}
        />
      );

      cy.downArrowKeydown().then(() => {
        cy.focused().should("have.attr", "row-index", "0");
      });
    });

    it("focus fist row input element after arrow down", () => {
      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: cy.stub(),
            activeRowFocusSelector: "input"
          }}
        />
      );

      cy.downArrowKeydown().then(() => {
        cy.focused().should("have.value", ITEMS[0].b);
      });
    });

    it("selects second row initially after initiallySelectedRowIndex=1", () => {
      const onKeyboardSelectStub = cy.stub();

      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: onKeyboardSelectStub,
            initiallySelectedRowIndex: 1
          }}
        />
      );

      cy.get("table tbody tr:nth-child(2)").should(
        "have.class",
        "a-data-table__row--key-selected"
      );
      expect(onKeyboardSelectStub.callCount).to.eq(0);
    });

    it("selects third row after page down and initiallySelectedRowIndex=1", () => {
      const onKeyboardSelectStub = cy.stub();

      cy.mount(
        <ADataTable
          headers={HEADERS}
          items={ITEMS}
          keyboardArrowSupport={{
            onKeyboardSelect: onKeyboardSelectStub,
            initiallySelectedRowIndex: 1
          }}
        />
      );

      cy.downArrowKeydown().then(() => {
        cy.get("table tbody tr:last").should(
          "have.class",
          "a-data-table__row--key-selected"
        );
        expect(onKeyboardSelectStub.callCount).to.eq(1);
      });
    });
  });
});
