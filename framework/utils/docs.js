import {Children, cloneElement, isValidElement} from "react";

export const getNestedChildrenText = (children) => {
  const text = [];

  function iterate(children) {
    Children.forEach(children, (child) => {
      if (typeof child === "string") {
        text.push(child);
      }

      if (child.props?.children) {
        iterate(child.props.children);
      }
    });
  }

  iterate(children);

  return {
    chunked: text,
    combined: text.join("")
  };
};

export const removeTextFromChildren = (children, text) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child) && typeof child === "string") {
      let sanitized = child.replace(text, "");
      return sanitized;
    } else if (child?.props?.children) {
      return cloneElement(child, {
        ...child.props,
        children: removeTextFromChildren(child.props.children, text)
      });
    } else {
      return child;
    }
  });
};
