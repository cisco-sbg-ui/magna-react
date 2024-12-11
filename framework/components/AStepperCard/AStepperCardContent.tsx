import React, {forwardRef, useRef, useMemo} from "react";
import {
  ACardContent,
  ACardFooter,
  ACardHeader,
  ACardItem,
  ACardTitle
} from "../ACard";
import {ACol} from "../ALayout";
import AButton from "../AButton";

type AStepperCardContentProps = any; //move to types.ts

const AStepperCardContent = forwardRef<HTMLDivElement, AStepperCardContentProps>(
  ({className: propsClassName = "", children, title, onCancel, onBack, onNext, ...rest}, ref) => {
    const containerRef = useRef(null); //what am I using this ref for, incl ref prop
    return (
        <ACol cols="6" {...rest}>
          <ACardHeader>
            <ACardTitle>{title}</ACardTitle>
          </ACardHeader>
          <ACardContent>{children}</ACardContent>
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

//change button text
//button disabled states, esp next

export default AStepperCardContent;