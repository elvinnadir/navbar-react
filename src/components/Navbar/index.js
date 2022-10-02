import React from "react";
import { Nav, NavBars, NavMenu, NavLink, NavBtn, NavBtnLink } from "./NavbarEl";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
