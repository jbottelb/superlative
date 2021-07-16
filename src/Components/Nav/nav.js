import React from "react";
import { Link } from "react-router-dom";

// Creates a navbar, Needs some CSS
const Nav = () => {
  return (
    <nav>
      <h3>Superlative</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/SignIn">
          <li>Sign Up</li>
        </Link>
        <Link to="/vote">
          <li>Vote</li>
        </Link>
        <Link to="/create">
          <li>Create</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
