import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        About us
      </NavLink>
      <NavLink exact activeClassName="active_class2" to="/contact">
        Contact us
      </NavLink>
      {/* This is the diffrnce is link and navlink using activeClassName */}
      <br></br>

      <Link activeClassName="acitve" to="/">About us</Link>
      <Link to="/contact">Contact us</Link>

      {/* See the differnce href relaod the whole page but the link doesnt relaod the page. */}
      <br></br>

      <a href="/"> About</a>
      <a href="/contact"> Contact us </a>
    </>
  );
};

export default Menu;
