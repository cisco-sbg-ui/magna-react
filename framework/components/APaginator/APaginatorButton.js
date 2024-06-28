import React from "react";
import AButton from "../AButton";

const APaginatorButton = ({children, index, onClick, ...rest}) => {
  return (
    <AButton
      key={index}
      className="a-paginator__page-button"
      onClick={() => {
        onClick(index);
      }}
      {...rest}
    >
      {children || index + 1}
    </AButton>
  );
};

export default APaginatorButton;
