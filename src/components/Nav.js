import React from "react";
import "../components/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/timer-app">Timer App</Link>
      <Link to="/todo-app">Todo App</Link>
      <Link to="/secret">Secret</Link>
    </div>
  );
};

export default Nav;
