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

const AStepperCardContent = forwardRef<HTMLDivElement, AStepperCardContentProps>(
  ({className: propsClassName = "", children, title, onCancel, onBack, onNext, ...rest}, ref) => {
    const containerRef = useRef(null); //what am I using this ref for, incl ref prop
    return (
        <ACol cols="7" className={`d-flex flex-column ${propsClassName}`} style={{height: "100%"}} {...rest as AColProps}>
          <ACardHeader>
            <ACardTitle>{title}</ACardTitle>
          </ACardHeader>
          <ACardContent className="overflow-y-scroll">{children}</ACardContent>
          <ACardFooter className="justify-space-between">
            <ACardItem attached="right">
              {  onCancel && <AButton medium tertiary onClick={onCancel}>
                Cancel
              </AButton>}
            </ACardItem>
            <ACardItem attached="right" >
              <AButton medium secondary onClick={onBack} className="mr-3">
                Back
              </AButton>
              <AButton medium onClick={onNext}>Next</AButton>
            </ACardItem>
          </ACardFooter>
        </ACol>
    );
  }
);

//changeable button text
//button disabled states, esp next

export default AStepperCardContent;