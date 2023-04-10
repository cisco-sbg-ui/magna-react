import {AButton, AIcon} from "../framework";

const ComponentTitle = ({title, sourceCodeLink}) => {
  return (
    <div className="mb-12">
      <div className="d-flex justify-space-between">
        <h1 className="mb-3 mt-0" style={{fontSize: "40px"}}>
          {title}
        </h1>
      </div>
      <AButton className="mr-2" href={sourceCodeLink}>
        <AIcon left>code</AIcon>
        Source
      </AButton>
      <AButton href={`${sourceCodeLink}/${title}.mdx`}>
        <AIcon left>pencil-simple</AIcon>
        Edit this page
      </AButton>
    </div>
  );
};

export default ComponentTitle;
