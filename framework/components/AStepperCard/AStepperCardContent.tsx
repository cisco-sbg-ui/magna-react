import React, {forwardRef} from "react";
import classnames from "classnames";

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
import type {AStepperCardContentProps} from "./types";
import type {AColProps} from "../ALayout/types";
import "./AStepperCard.scss";

const AStepperCardContent = forwardRef<
  HTMLDivElement,
  AStepperCardContentProps
>(
  (
    {
      className: propsClassName = "",
      children,
      title,
      subtitle,
      nextButtonText = "Next",
      backButtonProps,
      cancelButtonProps,
      nextButtonProps,
      contentFooter,
      ...rest
    },
    ref
  ) => {
    const baseClass = "a-stepper-card__content";
    return (
      <ACol
        cols="8"
        className={classnames(
          `${baseClass} ${propsClassName} d-flex flex-column`
        )}
        style={{height: "100%"}}
        ref={ref}
        {...(rest as AColProps)}>
        {title && (
          <ACardHeader className="mx-4 mt-6">
            <ACardTitle>{title}</ACardTitle>
          </ACardHeader>
        )}
        {subtitle && <ACardSubTitle>{subtitle}</ACardSubTitle>}
        <ACardContent className="overflow-y-scroll ma-4 mb-0 pb-4">
          {children}
        </ACardContent>
        {contentFooter ? (
          contentFooter
        ) : (
          <ACardFooter
            className={classnames(
              `${baseClass}__footer`,
              "justify-space-between py-3"
            )}>
            <ACardItem attached="right">
              {cancelButtonProps && (
                <AButton medium tertiary {...cancelButtonProps}>
                  Cancel
                </AButton>
              )}
            </ACardItem>
            <ACardItem attached="right">
              <AButton medium secondary className="mr-3" {...backButtonProps}>
                Back
              </AButton>
              <AButton medium {...nextButtonProps}>
                {nextButtonText}
              </AButton>
            </ACardItem>
          </ACardFooter>
        )}
      </ACol>
    );
  }
);

export default AStepperCardContent;
