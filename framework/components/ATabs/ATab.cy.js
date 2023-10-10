// import React, {useState} from "react";
// import ATabGroup from "./ATabGroup";
// import ATab from "./ATab";

// describe("<ATabGroup />", () => {
//   it("should render", () => {
//     cy.mount(<ATagTest />);
//   });
// });

// const ATagTest = () => {
//   const tabs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
//   const [activeTab, setActiveTab] = useState(tabs[2]);
//   return (
//     <div
//       className="d-flex justify-center align-center"
//       style={{width: "20rem", border: "1px solid red"}}>
//       <ATabGroup>
//         {tabs.map((x) => (
//           <ATab
//             key={x}
//             tabKey={x}
//             onClick={() => setActiveTab(x)}
//             selected={x === activeTab}>
//             {x}
//           </ATab>
//         ))}
//       </ATabGroup>
//       ;
//     </div>
//   );
// };
