import React from "react";
import { useHits } from "react-instantsearch-hooks";

const Autocomplete = () => {
  const { hits } = useHits();
  return (
    <div className="autocomplete-panel">
      {hits.length > 0 && (
        <ul className="autocomplete-items">
          {hits.map((hit) => (
            <li key={hit.handle}>
              <button
                className="autocomplete-item"
                onClick={() => handleSelection(hit.handle)}
              >
                <Item hit={hit} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

function Item({ hit }) {
  return (
    <div className="account-body">
      <div className="account-avatar">{/* <img src="" alt="" /> */}</div>
      <div className="account-name">@{hit.name}</div>
    </div>
  );
}
