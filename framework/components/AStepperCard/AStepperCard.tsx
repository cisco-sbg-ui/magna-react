import React, {forwardRef} from "react";
import classnames from "classnames";

import {ACardContainer} from "../ACard";
import {ACol, ARow} from "../ALayout";
import AStepper from "../AStepper/AStepper";
import AStep from "../AStepper/AStep";
import type {AStepProps} from "../AStepper/types";
import AStepTitle from "../AStepper/AStepTitle";
import type {AStepperCardProps} from "./types";
import "./AStepperCard.scss";

const AStepperCard = forwardRef<HTMLDivElement, AStepperCardProps>(
  ({active, children, steps, ...rest}, ref) => {
    const baseClass = "a-stepper-card";
    return (
      <ACardContainer
        className={classnames(baseClass, "pa-0")}
        ref={ref}
        {...rest}>
        {" "}
        <ARow style={{height: "100%"}} noGutters>
          <ACol
            cols="4"
            className={classnames(
              `${baseClass}__card__col`,
              "text-center pr-0"
            )}>
            <AStepper vertical>
              {steps.map((item: AStepProps, index: number) => {
                const stepNumber = index + 1;
                return (
                  <AStep
                    key={stepNumber}
                    stepNumber={stepNumber}
                    active={active === stepNumber}
                    visited={active > stepNumber}
                    {...steps[index]}>
                    <AStepTitle>{item.title}</AStepTitle>
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
