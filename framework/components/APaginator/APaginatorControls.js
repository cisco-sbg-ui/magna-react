import React from "react";
import AIcon from "../AIcon";
import APaginatorButton from "./APaginatorButton";
import APaginatorNumbers from "./APaginatorNumbers";

const ICON_SIZE = 20;

const APaginatorControls = ({
  disabled,
  pages,
  setWorkingPage,
  showPageNumbers,
  workingPage
}) => {
  return (
    <div className="a-paginator__controls">
      {!showPageNumbers && (
        <APaginatorButton
          className="a-paginator__first"
          disabled={disabled || workingPage === 0}
          tertiary
          icon
          index={0}
          onClick={setWorkingPage}
          aria-label="First"
        >
          <AIcon size={ICON_SIZE}>caret-line-left</AIcon>
        </APaginatorButton>
      )}
      <APaginatorButton
        className="a-paginator__previous"
        disabled={disabled || workingPage === 0}
        tertiary
        icon
        index={workingPage - 1}
        onClick={setWorkingPage}
        aria-label="Previous"
      >
        <AIcon size={ICON_SIZE}>caret-left</AIcon>
      </APaginatorButton>
      <APaginatorNumbers
        show={showPageNumbers}
        pages={pages}
        workingPage={workingPage}
        setWorkingPage={setWorkingPage}
        disabled={disabled}
      />
      <APaginatorButton
        className="a-paginator__next"
        disabled={disabled || workingPage === pages - 1}
        tertiary
        icon
        index={workingPage + 1}
        onClick={setWorkingPage}
        aria-label="Next"
      >
        <AIcon size={ICON_SIZE}>caret-right</AIcon>
      </APaginatorButton>
      {!showPageNumbers && (
        <APaginatorButton
          className="a-paginator__last"
          disabled={disabled || workingPage === pages - 1}
          tertiary
          icon
          index={pages - 1}
          onClick={setWorkingPage}
          aria-label="Last"
        >
          <AIcon size={ICON_SIZE}>caret-line-right</AIcon>
        </APaginatorButton>
      )}
    </div>
  );
};

export default APaginatorControls;
