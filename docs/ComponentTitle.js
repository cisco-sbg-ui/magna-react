import {forwardRef} from "react";
import {AButton, AIcon} from "../framework";

const ComponentTitle = ({title, sourceCodeLink}, ref) => {
  return (
    <div className="mb-12">
      <div className="d-flex justify-space-between">
        <h1 ref={ref} className="mb-3 mt-0" style={{fontSize: "40px"}}>
          {title}
        </h1>
      </div>
      <AButton medium className="mr-2" href={sourceCodeLink}>
        <AIcon left>code</AIcon>
        Source
      </AButton>
      <AButton medium href={`${sourceCodeLink}/${title}.mdx`}>
        <AIcon left>pencil-simple</AIcon>
        Edit this page
      </AButton>
    </div>
  );
};

export default forwardRef(ComponentTitle);
