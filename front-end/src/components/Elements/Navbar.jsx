import React from "react";
import "../../styles/componentStyles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="cart">
            <span role="img" aria-label="cart">
              🛒
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span role="img" aria-label="home">
              🏠
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
