import AUpload from "./AUpload";

describe("AUpload", () => {
  beforeEach(() => {});

  describe("basic rendering", () => {
    it("renders with text", () => {
      const text = "Upload a picture of a hot dog";
      cy.mount(<AUpload text={text} />);
      cy.contains(text).should("exist");
    });

    it("renders with supplemental text", () => {
      const supplementalText = "Supported file types: HOT, DOG";
      cy.mount(<AUpload supplementalText={supplementalText} />);
      cy.get(".a-upload__supplemental-text").should(
        "contain",
        supplementalText
      );
    });

    it("renders with a class name", () => {
      cy.mount(<AUpload className="hot-dog" />);
      cy.get(".a-upload").should("have.class", "test-class");
    });
  });

  describe("attaching a file", () => {
    // create a dataTransfer object to simulate the drag-and-drop event
    const dataTransfer = new DataTransfer();
    const file = new File(["{foo: 'bar'}"], "test-file.json", {
      type: "application/json"
    });

    beforeEach(() => {
      // add one file to the transfer
      dataTransfer.items.add(file);
    });

    afterEach(() => {
      // reset the dataTransfer object after each test
      dataTransfer.items.clear();
    });

    it("renders the attachments ui", () => {
      cy.mount(<AUpload />);

      // get the dropzone element and trigger the drag-and-drop events
      cy.get(".a-upload").trigger("drop", {dataTransfer});

      // a paperclip icon
      cy.get(".a-upload__file")
        .find(".a-icon")
        .first()
        .should("have.class", "a-icon--paperclip");
      // the name of the file
      cy.get(".a-upload__file").should("contain", "test-file.json");
      // a trash icon
      cy.get(".a-upload__file")
        .find(".a-icon")
        .last()
        .should("have.class", "a-icon--trash-simple");
    });

    it("renders a loading spinner", () => {
      cy.mount(<AUpload loading={true} />);

      // get the dropzone element and trigger the drag-and-drop events
      cy.get(".a-upload").trigger("drop", {dataTransfer});

      cy.get(".a-upload__file").find(".a-spinner").should("exist");
    });

    it("renders a progress bar", () => {
      cy.mount(<AUpload loading={true} progress={50} />);

      // get the dropzone element and trigger the drag-and-drop events
      cy.get(".a-upload").trigger("drop", {dataTransfer});

      cy.get(".a-upload__file").find(".a-progressbar").should("exist");
    });

    it("calls onFileDelete when the trash icon is clicked", () => {
      const onFileDelete = cy.stub().as("onFileDelete");
      cy.mount(<AUpload onFileDelete={onFileDelete} />);

      // get the dropzone element and trigger the drag-and-drop events
      cy.get(".a-upload").trigger("drop", {dataTransfer});

      // click the trash icon
      cy.get(".a-upload__file").find(".a-icon--trash-simple").click();

      // ensure the onFileDelete callback is called
      cy.get("@onFileDelete").should("have.been.calledOnce");
    });

    it("does not allow multiple files to be attached", () => {
      // add another item to simulate multiple files
      dataTransfer.items.add(file);

      const onCloseError = cy.stub().as("onCloseError");
      cy.mount(<AUpload onCloseError={onCloseError} />);

      // get the dropzone element and trigger the drag-and-drop events
      cy.get(".a-upload").trigger("drop", {dataTransfer});

      cy.get(".a-upload__file").should("not.exist");
      cy.get(".a-upload__alert").should("contain.text", "Too many files");

      // click the x icon
      cy.get(".a-upload__alert").find(".a-icon--x").click();

      // ensure the onCloseError callback is called
      cy.get("@onCloseError").should("have.been.calledOnce");
    });
  });
});
