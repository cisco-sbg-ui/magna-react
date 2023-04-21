import React, {useContext} from "react";

import {ACardContainer, ASimpleTable} from "../framework";
import PropsContext from "./PropsContext";

const types = {
  unknown: () => "Unknown",
  func: () => "Function",
  array: () => "Array",
  object: () => "Object",
  string: () => "String",
  number: () => "Number",
  bool: () => "Boolean",
  node: () => "ReactNode",
  element: () => "ReactElement",
  elementType: () => "ElementType",
  symbol: () => "Symbol",
  any: () => "Any",
  custom: () => "(custom validator)",
  shape: (value) =>
    `Shape<{
      ${Object.keys(value)
        .map((x) => `${x}: ${getType(value[x])}`)
        .join(", ")}
  }>`,
  arrayOf: (value) => `Array[]<${getType(value)}>`,
  objectOf: (value) => `Object[#]<${getType(value)}>`,
  instanceOf: (value) => `${getType(value)}`,
  enum: (value) => `Enum(${value.map((x) => x.value).join(", ")})`,
  union: (value) => `OneOfType[]<${value.map((x) => getType(x)).join("|")}>`
};

const getType = (type) => {
  if (type && typeof type === "string") return type;
  if (!type || !types[type.name]) return;
  return types[type.name](type.value) + (type.required ? " Required" : "");
};

export default function Props({of}) {
  const allProps = useContext(PropsContext);
  const props = allProps.find((x) => x.displayName === of)?.props || {};

  if (!Object.keys(props).length) {
    return <p className="mb-8">No props are defined for this component.</p>;
  }

  return (
    <ACardContainer>
      <ASimpleTable className="mb-8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((x, index) => (
            <tr key={index}>
              <td className="text-no-wrap">{x}</td>
              <td>
                <p className="mt-0">{props[x].description}</p>
                {props[x].required ? (
                  <>
                    <br />
                    <span className="status-red" style={{fontStyle: "italic"}}>
                      Required
                    </span>
                  </>
                ) : (
                  ""
                )}
                <br />
                <span style={{fontStyle: "italic", fontWeight: 500}}>
                  {getType(props[x].type)}
                </span>
              </td>
              <td>
                {props[x].defaultValue?.value || (
                  <span style={{fontStyle: "italic"}}>null</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </ASimpleTable>
    </ACardContainer>
  );
}
