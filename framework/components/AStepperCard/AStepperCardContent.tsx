import React, {forwardRef} from "react";
import {
  ACardContent,
  ACardFooter,
  ACardHeader,
  ACardItem,
  ACardSubTitle,
  ACardTitle
} from "../ACard";
import {ACol} from "../ALayout";
import AButton from "../AButton";
import {AStepperCardContentProps} from "./types";
import {AColProps} from "../ALayout/types";
import "./AStepperCard.scss";

const AStepperCardContent = forwardRef<HTMLDivElement, AStepperCardContentProps>(
  ({className: propsClassName = "", children, title, subtitle, onCancel, onBack, onNext, nextButtonText = "Next", isNextButtonDisabled= false, contentFooter, ...rest}, ref) => {
    return (
        <ACol cols="8" className={`d-flex flex-column ${propsClassName}`} style={{height: "100%"}} ref={ref} {...rest as AColProps}>
          {title && <ACardHeader className="mx-4 mt-6">
            <ACardTitle>{title}</ACardTitle>
          </ACardHeader>
          }
          {subtitle && <ACardSubTitle>{subtitle}</ACardSubTitle>}
          <ACardContent className="overflow-y-scroll ma-4 mb-0 pb-4">{children}</ACardContent>
            {contentFooter ? contentFooter : <ACardFooter className="a-stepper__card__content--footer justify-space-between py-3">
<ACardItem attached="right">
              {  onCancel && <AButton medium tertiary onClick={onCancel} data-testid="aStepperCardContent-button-cancel">
                Cancel
              </AButton>}
            </ACardItem>
            <ACardItem attached="right" >
              <AButton medium secondary onClick={onBack} className="mr-3" data-testid="aStepperCardContent-button-back">
                Back
              </AButton>
              <AButton medium disabled={isNextButtonDisabled} onClick={onNext} data-testid="aStepperCardContent-button-next">{nextButtonText}</AButton>
            </ACardItem></ACardFooter>}
          
        </ACol>
    );
  }
); 

export default AStepperCardContent;
