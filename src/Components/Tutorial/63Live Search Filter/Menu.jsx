import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar">
        <NavLink
          exact
          className="navlink"
          activeClassName="active_class"
          to="/"
        >
          About us
        </NavLink>

        <NavLink
          exact
          className="navlink"
          activeClassName="active_class2"
          to="/search"
        >
          Search
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
