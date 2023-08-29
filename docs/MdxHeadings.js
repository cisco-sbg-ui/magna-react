import React from "react";

const heading = (Tag) => {
  const MdxHeading = (props) => {
    if (!props.id) return <Tag {...props} />;
    return (
      <Tag {...props} style={{margin: "8px 0"}}>
        <a href={`#${props.id}`}>{props.children}</a>
      </Tag>
    );
  };

  return MdxHeading;
};

const components = {
  h2: heading("h2")
};

export default components;
