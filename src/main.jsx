import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const searchThings = algoliasearch(
  `latency`,
  `a4390aa69f26de2fd0c4209ff113a4f9`
);

const INDEX_NAME = `autoComplete_twitter_accounts`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <InstantSearch searchClient={searchThings} indexName={INDEX_NAME}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InstantSearch>
);
