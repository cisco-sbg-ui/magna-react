import {canNodeReceiveFocus} from "./helpers";

describe("utils tests", () => {
  describe("canNodeReceiveFocus", () => {
    it("should return true for form elements", () => {
      const formElements = ["input", "select", "textarea", "button"];

      formElements.forEach((tagName) => {
        const node = document.createElement(tagName);
        expect(canNodeReceiveFocus(node)).to.eq(true);
      });
    });

    it("should return false for hidden elements", () => {
      const hiddenNode = document.createElement("input");
      hiddenNode.setAttribute("hidden", "");

      expect(canNodeReceiveFocus(hiddenNode)).to.eq(false);
    });

    it("should return false for disabled elements", () => {
      const disabledNode = document.createElement("input");
      disabledNode.setAttribute("disabled", "");

      expect(canNodeReceiveFocus(disabledNode)).to.eq(false);
    });

    it("should return true for nodes with valid tab indexes", () => {
      [...new Array(5)].map((_, index) => {
        const element = document.createElement("div");
        element.setAttribute("tabindex", index);

        expect(canNodeReceiveFocus(element)).to.eq(true);
      });
    });

    it("should return false for nodes with a tab index less than 0", () => {
      const unFocusableNode = document.createElement("input");
      unFocusableNode.setAttribute("tabindex", "-1");

      expect(canNodeReceiveFocus(unFocusableNode)).to.eq(false);
    });

    it("should return true for nodes that are editable", () => {
      const editableNode = document.createElement("div");
      editableNode.setAttribute("contenteditable", "true");

      expect(canNodeReceiveFocus(editableNode)).to.eq(true);
    });
  });
});
