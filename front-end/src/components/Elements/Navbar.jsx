import React from "react";
import "../../styles/componentStyles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="cart">Cart</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
