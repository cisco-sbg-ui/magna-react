import React, {forwardRef, useRef, useMemo} from "react";
import {useResizeObserver} from "../../utils/hooks";
import {
  ACardContainer,
} from "../ACard";
import {ACol, ARow} from "../ALayout";
import AStepper from "../AStepper/AStepper";
import AStep from "../AStepper/AStep";
import {AStepProps} from "../AStepper/types";
import AStepTitle from "../AStepper/AStepTitle";
import { AStepperCardProps } from "./types";
import "./AStepperCard.scss";
//should allow visisted prop on AStep? 

const AStepperCard = forwardRef<HTMLDivElement, AStepperCardProps>(
  ({className: propsClassName = "", active, children, items, ...rest}) => {
    const containerRef = useRef(null);
    const {width} = useResizeObserver(containerRef); //compare with acardcontainer width resizer
    return (
      <ACardContainer ref={containerRef} className="a-stepper-card-container pa-0" style={{height: "100%"}}>
        <ARow style={{height: "100%"}} noGutters>
        <ACol cols="4" className="a-stepper__card--col dark-cool-grey white--text text-center pr-0">
          <AStepper vertical>
          {items.map((item: AStepProps, index: number) => {
          const stepNumber = index + 1;
          return (
            <AStep
              key={stepNumber}
              stepNumber={stepNumber}
              active={active === stepNumber}
              visited={active > stepNumber}
              showIconOnVisited={true}>
              <AStepTitle className="AStepTitle">
                {item.title}
              </AStepTitle>
              </AStep>
          );
        })}
          </AStepper>
        </ACol>
        {children}
        </ARow>
      </ACardContainer>
    );
  }
);

export default AStepperCard;