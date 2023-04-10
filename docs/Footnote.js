import {ACardBasic} from "../framework";

const Footnote = ({description, num, ...rest}) => {
  return (
    <span {...rest}>
      {!isNaN(num) && <span className="mds-red--red-10--text">[{num}]</span>}
      {description && <p>{description}</p>}
    </span>
  );
};

export default Footnote;
