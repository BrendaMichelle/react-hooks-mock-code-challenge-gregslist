import React, { useState } from "react";

function Search({ onSearchSubmit }) {
  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(query)
  }

  function handleQueryOnChange(event) {
    setQuery(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={handleQueryOnChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
