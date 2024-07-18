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
  if (!type) {
    return null;
  }

  if (typeof type === "string") {
    return type;
  }

  if (type?.name === "enum") {
    let enumString = type.raw ? `${type.raw} - ` : "";
    enumString += `[${type.value.map((v) => v.value).join(", ")}]`;

    return enumString;
  }

  const mapper = types[type?.name];
  return mapper ? mapper(type?.value) : type?.name;
};

export default function Props({of, inDrawer}) {
  const allProps = useContext(PropsContext);
  const props = allProps.find((x) => x.displayName === of)?.props || {};

  if (!Object.keys(props).length) {
    return <p className="mb-8">No props are defined for this component.</p>;
  }

  return (
    <ACardContainer style={{margin: inDrawer ? "10px 20px" : "10px 0"}}>
      <ASimpleTable className="mb-8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th style={{textAlign: "center"}}>Required</th>
            <th style={{textAlign: "center"}}>Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((x, index) => {
            const type = getType(props[x].type);

            return (
              <tr key={index}>
                <td className="text-no-wrap">{x}</td>
                <td>
                  <p className="mt-0">{props[x].description}</p>
                  <span style={{fontStyle: "italic", fontWeight: 500}}>
                    {type}
                  </span>
                </td>
                <td style={{textAlign: "center"}}>
                  {props[x].required ? "true" : <span>-</span>}
                </td>
                <td style={{textAlign: "center"}}>
                  {props[x].defaultValue?.value || <span>-</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </ASimpleTable>
    </ACardContainer>
  );
}
