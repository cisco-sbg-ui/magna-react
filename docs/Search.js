import algoliasearch from "algoliasearch";
import Link from "next/link";
import debounce from "lodash.debounce";
import React, {useCallback, useEffect, useRef, useState} from "react";

import {AListItem, AMenu, ATextInput} from "../framework";

const Search = () => {
  const client = algoliasearch(
    "NUT7B5FGKT",
    "6e8a1bb15c50d7e391219fa54b2bd109"
  );
  const index = client.initIndex("Docs");

  const searchCallback = async function (rawTerm) {
    const term = (rawTerm || "").trim();
    if (searchRunning || term.length === 0 || term === previousTerm) {
      return;
    }
    setSearchRunning(true);
    const {hits} = await index.search(term, {
      hitsPerPage: 5
    });
    setPreviousTerm(term);
    setItems(hits);
    setOpen(true);
    setSearchRunning(false);
  };

  const inputRef = useRef(null);
  const [searchRunning, setSearchRunning] = useState(false);
  const [previousTerm, setPreviousTerm] = useState();
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const onChange = useCallback(debounce(searchCallback, 350), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    onChange(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ATextInput
        ref={inputRef}
        clearable={value.length > 0}
        prependIcon="search"
        value={value}
        label={<span className='white--text'>Search</span>}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <AMenu
        anchorRef={inputRef}
        open={open}
        focusOnOpen={false}
        placement="bottom-left"
        onClose={() => setOpen(false)}
        style={{width: 285}}>
        {items.map((x, index) => (
          <Link key={index} href={x.route} passHref>
            <AListItem>{x.name}</AListItem>
          </Link>
        ))}
      </AMenu>
    </>
  );
};

export default Search;
