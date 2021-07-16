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
        <Link to="/signup">
          <li>Sign Up / Log in</li>
        </Link>
        <Link to="/vote">
          <li>Vote on a Form</li>
        </Link>
        <Link to="/create">
          <li>Create a Form</li>
        </Link>
        <Link to="/view">
          <li>View Created Forms</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
