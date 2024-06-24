import React from "react";

const APaginatorPageDetail = ({show, page, total, resultsPerPage}) => {
  if (!show) {
    return null;
  }

  const firstResultIndex = page * resultsPerPage + 1;
  const lastResultIndex = Math.min(
    total,
    page * resultsPerPage + resultsPerPage
  );

  return (
    <div className="a-paginator__results">
      {firstResultIndex?.toLocaleString()}-{lastResultIndex?.toLocaleString()}{" "}
      of {total?.toLocaleString()}
    </div>
  );
};

export default APaginatorPageDetail;
