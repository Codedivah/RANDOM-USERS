import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  return (
    <div className="header">
      <div className="header-logo">LEEROY TRICHOLOGY CLINIC</div>
      <nav className="header-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
