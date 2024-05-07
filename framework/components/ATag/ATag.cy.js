import ATag from "./ATag";
import AIcon from "../AIcon";

describe("<ATag />", () => {
  it("should render", () => {
    cy.mount(
      <ATagContainer>
        <ATag>Lonely tag</ATag>
      </ATagContainer>
    );
  });

  it("should use status styling with status prop", () => {
    cy.mount(
      <ATagContainer>
        <ATag status="warning">Lonely tag</ATag>
      </ATagContainer>
    );
    cy.get(".a-tag--status-warning")
      .should("exist")
      .get(".a-icon--warning")
      .should("exist");
  });

  it("status icon should replace status icon when using custom icon", () => {
    cy.mount(
      <ATagContainer>
        <ATag status="warning" customIcon>
          <AIcon size="16" left>
            circle-wavy-check
          </AIcon>
          Lonely tag
        </ATag>
      </ATagContainer>
    );
    cy.get(".a-tag--status-warning")
      .should("exist")
      .get(".a-icon--circle-wavy-check")
      .should("exist");
    cy.get(".a-icon--warning-circle").should("not.exist");
  });

  it("status icon should replace status icon when using custom icon as prop", () => {
    cy.mount(
      <ATagContainer>
        <ATag
          status="warning"
          customIcon={
            <AIcon size="16" left>
              circle-wavy-check
            </AIcon>
          }
        >
          Lonely tag
        </ATag>
      </ATagContainer>
    );
    cy.get(".a-tag--status-warning")
      .should("exist")
      .get(".a-icon--circle-wavy-check")
      .should("exist");
    cy.get(".a-icon--warning-circle").should("not.exist");
  });
});

const ATagContainer = ({children}) => (
  <div
    className="d-flex justify-center align-center"
    style={{height: "100vh", width: "100vw"}}
  >
    {children}
  </div>
);
