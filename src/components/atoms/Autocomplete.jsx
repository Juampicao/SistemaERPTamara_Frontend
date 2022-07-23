import React from "react";
import { useHits } from "react-instantsearch-hooks";

const autoComplete = () => {
  const { hits } = useHits();
  return (
    <div className="autoComplete-panel">
      {hits.length > 0 && (
        <ul className="autoComplete-items">
          {hits.map((hit) => (
            <li key={hit.handle}>
              <button
                className="autoComplete-item"
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

export default autoComplete;

function Item({ hit }) {
  return (
    <div className="account-body">
      <div className="account-avatar">{/* <img src="" alt="" /> */}</div>
      <div className="account-name">@{hit.name}</div>
    </div>
  );
}
