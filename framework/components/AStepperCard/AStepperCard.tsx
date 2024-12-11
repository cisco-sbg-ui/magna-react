import React, {forwardRef, useRef, useMemo} from "react";
import {useResizeObserver} from "../../utils/hooks";
import {
  ACardContainer,
} from "../ACard";
import {ACol} from "../ALayout";
// import AStepper from "../AStepper/AStepper";

type AStepperCardProps = any; //move to types.ts

const AStepperCard = forwardRef<HTMLDivElement, AStepperCardProps>(
  ({className: propsClassName = "", children, ...rest}, ref) => {
    const containerRef = useRef(null);
    const {width} = useResizeObserver(containerRef); //compare with acardcontainer width resizer

    return (
      <ACardContainer ref={containerRef} className="a-stepper-card-container">
        <ACol cols="3" className="dark-cool-grey white--text text-center">
          {/* <AStepper></AStepper> */}
        </ACol>
        {children}
      </ACardContainer>
    );
  }
);

export default AStepperCard;