import React from "react";

export const getRoundedBoundedClientRect = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    top: Math.round(rect.top),
    left: Math.round(rect.left),
    bottom: Math.round(rect.bottom),
    right: Math.round(rect.right),
    width: Math.round(rect.width),
    height: Math.round(rect.height)
  };
};

/**
 * The `ref` prop in React takes either an
 * instance of a React Ref (which returns a
 * mutable object), or a callback function,
 * but _not_ both. This utility makes it possible
 * to pass _both_ types of `ref` values by
 * delegating the incoming DOM node each type of
 * `ref` values.
 * @example using two separate refs
 * <input ref={handleMultipleRefs(someRefCallback, someRefInstance)} />
 */
export const handleMultipleRefs = (...refs) => {
  const callbackRef = (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      ref.current = node;
    });
  };
  return callbackRef;
};

export const preventBodyScroll = () => {
  // Atomic React adds an overflow-x hidden to the HTML root
  // so we have to also add a property for the overflow-y
  // @see https://stackoverflow.com/questions/29786345/overflow-x-hidden-causes-vertical-scrollbar
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
};

export const allowBodyScroll = () => {
  document.documentElement.style.removeProperty("overflow-y");
  document.body.style.overflow = "unset";
  document.body.style.height = "auto";
};

// KeyboardEvent.keyCode aliases
export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
});

export const isStockColor = (color) => {
  return [
    "black",
    "white",
    "grey--darken-7",
    "grey--darken-6",
    "grey--darken-5",
    "grey--darken-4",
    "grey--darken-3",
    "grey--darken-2",
    "grey--darken-1",
    "grey",
    "grey--lighten-1",
    "grey--lighten-2",
    "grey--lighten-3",
    "grey--lighten-4",
    "grey--lighten-5",
    "grey--lighten-6",
    "dusk--1",
    "dusk--2",
    "dusk--3",
    "dusk--4",
    "dusk--5",
    "dusk--6",
    "status-red--burnt-3",
    "status-red--burnt-2",
    "status-red--burnt-1",
    "status-red",
    "status-red--wash-1",
    "status-red--wash-2",
    "status-red--wash-3",
    "status-blue--burnt-3",
    "status-blue--burnt-2",
    "status-blue--burnt-1",
    "status-blue",
    "status-blue--wash-1",
    "status-blue--wash-2",
    "status-blue--wash-3",
    "status-green--burnt-3",
    "status-green--burnt-2",
    "status-green--burnt-1",
    "status-green",
    "status-green--wash-1",
    "status-green--wash-2",
    "status-green--wash-3",
    "status-yellow--burnt-3",
    "status-yellow--burnt-2",
    "status-yellow--burnt-1",
    "status-yellow",
    "status-yellow--wash-1",
    "status-yellow--wash-2",
    "status-yellow--wash-3",
    "status-orange--burnt-3",
    "status-orange--burnt-2",
    "status-orange--burnt-1",
    "status-orange",
    "status-orange--wash-1",
    "status-orange--wash-2",
    "status-orange--wash-3",
    "cisco-blue--burnt-3",
    "cisco-blue--burnt-2",
    "cisco-blue--burnt-1",
    "cisco-blue",
    "cisco-blue--wash-1",
    "cisco-blue--wash-2",
    "cisco-blue--wash-3",
    "sage-green--burnt-3",
    "sage-green--burnt-2",
    "sage-green--burnt-1",
    "sage-green",
    "sage-green--wash-1",
    "sage-green--wash-2",
    "sage-green--wash-3",
    "turquoise--burnt-3",
    "turquoise--burnt-2",
    "turquoise--burnt-1",
    "turquoise",
    "turquoise--wash-1",
    "turquoise--wash-2",
    "turquoise--wash-3",
    "purple--burnt-3",
    "purple--burnt-2",
    "purple--burnt-1",
    "purple",
    "purple--wash-1",
    "purple--wash-2",
    "purple--wash-3",
    "indigo-blue--burnt-1",
    "indigo-blue",
    "indigo-blue--wash-1",
    "indigo-blue--wash-2",
    "indigo-blue--wash-3",
    "indigo-blue--wash-4",
    "indigo-blue--wash-5",
    "brand-orange--burnt-3",
    "brand-orange--burnt-2",
    "brand-orange--burnt-1",
    "brand-orange",
    "brand-orange--wash-1",
    "brand-orange--wash-2",
    "brand-orange--wash-3",
    "coral--burnt-3",
    "coral--burnt-2",
    "coral--burnt-1",
    "coral",
    "coral--wash-1",
    "coral--wash-2",
    "coral--wash-3",
    "grape--burnt-3",
    "grape--burnt-2",
    "grape--burnt-1",
    "grape",
    "grape--wash-1",
    "grape--wash-2",
    "grape--wash-3",
    "fern--burnt-3",
    "fern--burnt-2",
    "fern--burnt-1",
    "fern",
    "fern--wash-1",
    "fern--wash-2",
    "fern--wash-3",
    "teal--burnt-3",
    "teal--burnt-2",
    "teal--burnt-1",
    "teal",
    "teal--wash-1",
    "teal--wash-2",
    "teal--wash-3",
    "berry--burnt-3",
    "berry--burnt-2",
    "berry--burnt-1",
    "berry",
    "berry--wash-1",
    "berry--wash-2",
    "berry--wash-3",
    "dark-blue--burnt-2",
    "dark-blue--burnt-1",
    "dark-blue",
    "dark-blue--wash-1",
    "dark-blue--wash-2",
    "dark-blue--wash-3",
    "dark-blue--wash-4",
    "magenta--burnt-3",
    "magenta--burnt-2",
    "magenta--burnt-1",
    "magenta",
    "magenta--wash-1",
    "magenta--wash-2",
    "magenta--wash-3",
    "dark-cool-grey--burnt-3",
    "dark-cool-grey--burnt-2",
    "dark-cool-grey--burnt-1",
    "dark-cool-grey",
    "dark-cool-grey--wash-1",
    "dark-cool-grey--wash-2",
    "dark-cool-grey--wash-3",
    "secure-blue--1",
    "secure-blue--2",
    "secure-blue--3",
    "secure-green--1",
    "mds-neutral--neutral-1"
  ].includes(color);
};

const validColorRegex =
  /^(#(?:[0-9a-f]{2}){2,4}$|(#[0-9a-f]{3}$)|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\)$|black$|silver$|gray$|whitesmoke$|maroon$|red$|purple$|fuchsia$|green$|lime$|olivedrab$|yellow$|navy$|blue$|teal$|aquamarine$|orange$|aliceblue$|antiquewhite$|aqua$|azure$|beige$|bisque$|blanchedalmond$|blueviolet$|brown$|burlywood$|cadetblue$|chartreuse$|chocolate$|coral$|cornflowerblue$|cornsilk$|crimson$|currentcolor$|darkblue$|darkcyan$|darkgoldenrod$|darkgray$|darkgreen$|darkgrey$|darkkhaki$|darkmagenta$|darkolivegreen$|darkorange$|darkorchid$|darkred$|darksalmon$|darkseagreen$|darkslateblue$|darkslategray$|darkslategrey$|darkturquoise$|darkviolet$|deeppink$|deepskyblue$|dimgray$|dimgrey$|dodgerblue$|firebrick$|floralwhite$|forestgreen$|gainsboro$|ghostwhite$|goldenrod$|gold$|greenyellow$|grey$|honeydew$|hotpink$|indianred$|indigo$|ivory$|khaki$|lavenderblush$|lavender$|lawngreen$|lemonchiffon$|lightblue$|lightcoral$|lightcyan$|lightgoldenrodyellow$|lightgray$|lightgreen$|lightgrey$|lightpink$|lightsalmon$|lightseagreen$|lightskyblue$|lightslategray$|lightslategrey$|lightsteelblue$|lightyellow$|limegreen$|linen$|mediumaquamarine$|mediumblue$|mediumorchid$|mediumpurple$|mediumseagreen$|mediumslateblue$|mediumspringgreen$|mediumturquoise$|mediumvioletred$|midnightblue$|mintcream$|mistyrose$|moccasin$|navajowhite$|oldlace$|olive$|orangered$|orchid$|palegoldenrod$|palegreen$|paleturquoise$|palevioletred$|papayawhip$|peachpuff$|peru$|pink$|plum$|powderblue$|rosybrown$|royalblue$|saddlebrown$|salmon$|sandybrown$|seagreen$|seashell$|sienna$|skyblue$|slateblue$|slategray$|slategrey$|snow$|springgreen$|steelblue$|tan$|thistle$|tomato$|transparent$|turquoise$|violet$|wheat$|white$|yellowgreen$|rebeccapurple$)/i;

export const isValidColor = (props, propName, componentName) => {
  const color = props?.[propName];
  if (
    color &&
    !isStockColor(color) &&
    !validColorRegex.test(color) &&
    !color.startsWith("var(")
  ) {
    return new Error(
      "Invalid value (`" +
        JSON.stringify(props[propName]) +
        "`) supplied to prop `" +
        propName +
        "` in `" +
        componentName +
        "`. Validation failed."
    );
  }
};

/*
 * At some points through the icon migrations names were camelCase
 * rather than kebab-case. This helper will allow checking and
 * reduce developer work to keep things consistent.
 */
export const kebabify = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

export const isBackwardTab = (e) => {
  const key = e.key;
  const isTabbingBack = e.shiftKey && key === "Tab";
  return isTabbingBack;
};

export const isForwardTab = (e) => {
  const key = e.key;
  const isTabbingForward = !isBackwardTab(e) && key === "Tab";
  return isTabbingForward;
};

export const localeIncludes = (
  string,
  searchString,
  {position = 0, locales, ...options} = {}
) => {
  if (
    string === undefined ||
    string === null ||
    searchString === undefined ||
    searchString === null
  ) {
    return true;
  }

  const lengthDiff = string.length - searchString.length;

  for (let i = position; i <= lengthDiff; i++) {
    if (
      string
        .substring(i, i + searchString.length)
        .localeCompare(searchString, locales, options) === 0
    ) {
      return true;
    }
  }

  return false;
};

export const copyToClipboard = (value, containerId) => {
  const parentEl = containerId
    ? document.getElementById(containerId)
    : document.body;

  let t = document.createElement("textarea");
  t.id = "t";
  t.style.height = 0;
  parentEl.appendChild(t);
  t.value = value;
  let selector = document.querySelector("#t");
  selector.select();
  selector.focus();
  document.execCommand("copy");
  parentEl.removeChild(t);
};

const isFormControl = (element) => {
  if (!element?.tagName) {
    return false;
  } else {
    return ["input", "select", "textarea", "button"].includes(
      element.tagName.toLowerCase()
    );
  }
};

export const canNodeReceiveFocus = (node) => {
  if (!node) {
    return false;
  }

  if (node.hidden || node.disabled) {
    return false;
  }

  if (parseInt(node.tabIndex) >= 0) {
    return true;
  }

  if (isFormControl(node) && parseInt(node.tabIndex) >= 0) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
};

/**
 * @param {String} value value of the search input
 * @param {String|Object} item item to be searched
 * @returns {Array}  Returns an array of strings and JSX elements. Wrap in an element such as <span> to render.
 */
export const handleBoldText = (value, item) => {
  if (!value) {
    return item;
  }

  const regex = new RegExp(`(${value})`, "gi");
  const itemArray = item.split(regex);
  const boldText = itemArray.map((str, i) => {
    if (regex.test(str)) {
      return <b key={`bold-item-${i}`}>{str}</b>;
    }
    return str;
  });

  return boldText;
};
