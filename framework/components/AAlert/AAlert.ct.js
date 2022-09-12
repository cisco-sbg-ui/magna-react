import {mount} from "@cypress/react";

import AApp from "../AApp";
import AAlert from "./AAlert";

describe("AAlert component tests", () => {
    it("should mount", () => {
        mount(
            <AApp>
                <AAlert style={{width: '300px'}} level="info">
                    Informational Alert
                </AAlert>
            </AApp>
        );
        cy.get("*[role='alert']").should("exist");
    });
});
