import {mount} from "@cypress/react";

import AApp from "../AApp";
import AButton from "./AButton";

describe("AButton component tests", () => {
    it("should mount", () => {
        mount(
          <AApp>
            <AButton tertiary>Click</AButton>
          </AApp>
        );
        cy.get("button").should("exist");
    });
});
