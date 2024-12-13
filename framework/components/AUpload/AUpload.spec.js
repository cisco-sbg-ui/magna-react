import AUpload from "./AUpload";

describe("AUpload Component", () => {
  beforeEach(() => {
    cy.mount(<AUpload />);
  });

  it("renders default state correctly", () => {
    cy.contains("Click or drag file to this area to upload").should("exist");
  });

  it("renders loading state correctly", () => {
    cy.mount(<AUpload loading={true} />);
    cy.contains("Uploading").should("exist");
  });

  it("renders with supplemental text", () => {
    const supplementalText = "Supported file types: PNG, JPG";
    cy.mount(<AUpload supplementalText={supplementalText} />);
    cy.contains(supplementalText).should("exist");
  });

  it("accepts file drop", () => {
    const onUpload = cy.stub().as("onUpload");
    cy.mount(<AUpload onUpload={onUpload} />);
    const file = new File(["dummy content"], "test-file.png", {
      type: "image/png"
    });
    cy.get('input[type="file"]').attachFile(file);
    cy.get("@onUpload").should("have.been.called");
  });

  it("rejects file drop", () => {
    const onUploadRejected = cy.stub().as("onUploadRejected");
    cy.mount(
      <AUpload
        accept={{"image/jpeg": [".jpeg", ".jpg"]}}
        onUploadRejected={onUploadRejected}
      />
    );
    const file = new File(["dummy content"], "test-file.png", {
      type: "image/png"
    });
    cy.get('input[type="file"]').attachFile(file);
    cy.get("@onUploadRejected").should("have.been.called");
  });

  it("displays file preview after drop", () => {
    cy.mount(<AUpload />);
    const file = new File(["dummy content"], "test-file.png", {
      type: "image/png"
    });
    cy.get('input[type="file"]').attachFile(file);
    cy.get(".a-upload__interior img")
      .should("have.attr", "src")
      .and("include", "blob:");
  });

  it("displays error message on rejected file", () => {
    const onUploadRejected = cy.stub().as("onUploadRejected");
    cy.mount(
      <AUpload
        accept={{"image/jpeg": [".jpeg", ".jpg"]}}
        onUploadRejected={onUploadRejected}
      />
    );
    const file = new File(["dummy content"], "test-file.png", {
      type: "image/png"
    });
    cy.get('input[type="file"]').attachFile(file);
    cy.get("@onUploadRejected").should("have.been.called");
    cy.contains("Drop was rejected. Do something useful here.").should("exist");
  });
});
