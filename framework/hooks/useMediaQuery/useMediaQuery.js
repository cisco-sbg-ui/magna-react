import {useCallback, useEffect, useRef, useState} from "react";

/**
 * Uses the `matchMedia` API to dynamically determine if the document currently
 * matches a particular media query.
 * @param {string} mediaQuery - CSS media query to be tested the document
 * @returns {boolean} indicates if the media
 * query matches the document
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 */
const useMediaQuery = (mediaQuery, config = {}) => {
  const {onChange} = config;
  const mediaQueryList = useRef();
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window?.matchMedia(mediaQuery)?.matches
  );

  const validateQuery = useCallback(
    (e) => {
      if (typeof onChange === "function") {
        onChange(e);
      }
      setMatches(e?.target?.matches);
    },
    [onChange, setMatches]
  );

  useEffect(() => {
    mediaQueryList.current = window.matchMedia(mediaQuery);
    setMatches(mediaQueryList.current.matches);
    mediaQueryList.current.onchange = validateQuery;

    return () => (mediaQueryList.current.onchange = null);
  }, [mediaQuery, validateQuery]);

  return {
    matches,
    mediaQueryList: mediaQueryList.current
  };
};

export default useMediaQuery;
