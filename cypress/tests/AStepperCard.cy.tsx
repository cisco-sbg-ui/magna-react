import React, {useState} from "react";
import {AButton, ACardFooter, ACardItem, AStepperCard, AStepperCardContent} from "../../framework";

const cardContent = [
    {title: "Title One", subtitle: "Subtitle", content:<p data-testid="aStepperCard-step-menuitem-1">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>}, 
    {title: "Title Two", subtitle: "Subtitle", content:<p data-testid="aStepperCard-step-menuitem-2">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>}, 
    {title: "Title Three", content:<p data-testid="aStepperCard-step-menuitem-3">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>}]
    
const steps = [
    {title: "Long First Stepper Title" },
    {title: "Second Title"},
    {title: "Final Title"}
  ];

const AStepperCardTest = ({active, setActive, ...rest}) => {
  return (
    <div style={{height: 500}}>
    <AStepperCard 
        active={active} 
        items={steps} 
        data-testid={"aStepperCard-container"} 
        stepProps={{visited: false}}>
    <AStepperCardContent title={cardContent[active - 1].title} 
        data-testid={"aStepperCardContent-container"}
        isNextButtonDisabled={active === cardContent.length}
        nextButtonText={active < cardContent.length ? "Next" : "Submit"}
        onBack={() => active > 1 && setActive(active - 1)}
        onCancel={() => {}}
        onNext={()=> active < steps.length && setActive(active + 1)}
        {...rest}
    >
        {cardContent[active - 1].content}
    </AStepperCardContent>
</AStepperCard>
</div>
  );
};

describe("<ASlider />", () => {
  it("should render with specifications", () => {
    const WrapperComponent = () => {
        const [active, setActive] = useState(1);
        return <AStepperCardTest active={active} setActive={setActive} />;
      };

    cy.mount(
     <WrapperComponent/>
    );

    cy.getByDataTestId("aStepperCard-step-menuitem-1").should("exist");

    cy.getByDataTestId("aStepperCardContent-button-next").should("have.text", "Next");
    cy.getByDataTestId("aStepperCardContent-button-next").click().click();
    cy.getByDataTestId("aStepperCardContent-button-next").should("have.text", "Submit").and("have.attr", "disabled");

    cy.getByDataTestId("aStepperCardContent-button-back").click();
    cy.getByDataTestId("aStepperCard-step-menuitem-2").should("exist");

});
 it("should render with custom footer", () => {
    const WrapperComponent = () => {

    const ContentFooter = () => <ACardFooter className="ma-3" data-testid="aStepper-contentFooter-custom">
    <ACardItem stretched></ACardItem>
    <ACardItem attached="right">
      <AButton medium tertiary>Button</AButton>
    </ACardItem>
    <ACardItem attached="right">
      <AButton medium secondary onClick={() => active > 1 && setActive(active - 1)}>Custom Back</AButton>
    </ACardItem>
    <ACardItem>
      <AButton medium onClick={()=> active < steps.length && setActive(active + 1)}>Custom Next</AButton>
    </ACardItem>
  </ACardFooter>

    const [active, setActive] = useState(1);
    return <AStepperCardTest active={active} setActive={setActive} contentFooter={<ContentFooter />} active={active} setActive={setActive}/>

  };

cy.mount(
 <WrapperComponent/>
);

cy.getByDataTestId("aStepperCard-step-menuitem-1").should("exist");
cy.getByDataTestId("aStepper-contentFooter-custom").should("exist");
  
 });
});
