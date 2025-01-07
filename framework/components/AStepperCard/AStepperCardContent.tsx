import React, {forwardRef, useRef} from "react";
import {
  ACardContent,
  ACardFooter,
  ACardHeader,
  ACardItem,
  ACardTitle
} from "../ACard";
import {ACol} from "../ALayout";
import AButton from "../AButton";
import {AStepperCardContentProps} from "./types";
import {AColProps} from "../ALayout/types";
import "./AStepperCard.scss";

const AStepperCardContent = forwardRef<HTMLDivElement, AStepperCardContentProps>(
  ({className: propsClassName = "", children, title, onCancel, onBack, onNext, nextButtonText = "Next", isNextButtonDisabled= false, ...rest}, ref) => {
    const containerRef = useRef(null); //what am I using this ref for, incl ref prop
    return (
        <ACol cols="8" className={`d-flex flex-column ${propsClassName}`} style={{height: "100%"}} {...rest as AColProps}>
          {title && <ACardHeader className="mx-4 mt-6">
            <ACardTitle>{title}</ACardTitle>
          </ACardHeader>
          }
          <ACardContent className="overflow-y-scroll ma-4 mb-0 pb-4">{children}</ACardContent>
          <ACardFooter className="a-stepper__card__content--footer justify-space-between py-3">
            <ACardItem attached="right">
              {  onCancel && <AButton medium tertiary onClick={onCancel}>
                Cancel
              </AButton>}
            </ACardItem>
            <ACardItem attached="right" >
              <AButton medium secondary onClick={onBack} className="mr-3">
                Back
              </AButton>
              <AButton medium disabled={isNextButtonDisabled} onClick={onNext}>{nextButtonText}</AButton>
            </ACardItem>
          </ACardFooter>
        </ACol>
    );
  }
);

// updates to storybook- props page, different useages?
export default AStepperCardContent;