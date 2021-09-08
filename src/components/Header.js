import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ onSearchSubmit, onSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
      <Sort onSort={onSort} />
    </header>
  );
}

export default Header;
