import React from "react";

const Nav = () => {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
          padding: 0,
        }}
      >
        <li>
          <a href="#">Women's</a>
        </li>
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">On the Street</a>
        </li>
        <li>
          <a href="#">The Catwalk</a>
        </li>
        <li>
          <a href="#">AdWatch</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
