import "../../css/nav.css";
import React from "react";
import { Link } from "react-router-dom";

// Creates a navbar
const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-links">
          <Link to="/signup">Sign Up/Log in</Link>
        </li>
        <li className="nav-links">
          <Link to="/vote">Vote on a Form</Link>
        </li>
        <li className="nav-links">
          <Link to="/create">Create a Form</Link>
        </li>
        <li className="nav-links">
          <Link to="/view">View Created Forms</Link>
        </li>
        <li className="nav-links">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-links">
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
