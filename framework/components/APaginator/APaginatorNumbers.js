import React from "react";
import APaginatorButton from "./APaginatorButton";

const APaginatorNumbers = ({
  show,
  pages,
  workingPage,
  setWorkingPage,
  disabled
}) => {
  if (!show) {
    return null;
  }

  return (
    <>
      {/*Button to navigate to the first page*/}
      {workingPage > 1 && (
        <APaginatorButton
          tertiary
          onClick={setWorkingPage}
          index={0}
          disabled={disabled}
        />
      )}

      {/*Ellipsis between the first page and the current pages*/}
      {workingPage > 2 && <div className={"a-paginator__dots"}>...</div>}

      {/*Previous page, current page, and next page*/}
      {workingPage !== 0 && (
        <APaginatorButton
          tertiary
          onClick={setWorkingPage}
          index={workingPage - 1}
          disabled={disabled}
        />
      )}

      <APaginatorButton
        secondary
        onClick={setWorkingPage}
        index={workingPage}
        className="a-button--selected"
        disabled={disabled}
      />

      {pages > 0 && workingPage !== pages - 1 && (
        <APaginatorButton
          tertiary
          onClick={setWorkingPage}
          index={workingPage + 1}
          disabled={disabled}
        />
      )}

      {/*Ellipsis between the current page and the last page*/}
      {workingPage < pages - 3 && (
        <div className={"a-paginator__dots"}>...</div>
      )}

      {/*Button to navigate to the last page*/}
      {workingPage < pages - 2 && (
        <APaginatorButton
          tertiary
          onClick={setWorkingPage}
          index={pages - 1}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default APaginatorNumbers;
