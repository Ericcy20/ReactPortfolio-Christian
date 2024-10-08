import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "/xampp/htdocs/portfolio-react-master/portfolio-react-master/src/Assets/logo.png";
const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>{" "}
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects{" "}
          </NavLink>{" "}
          <NavLink className="menu-item" to="about" smooth={true}>
            About{" "}
          </NavLink>{" "}
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact{" "}
          </NavLink>{" "}
        </NavMenu>{" "}
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://github.com/Ericcy20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume{" "}
          </a>{" "}
        </NavBtn>{" "}
        <Bars onClick={toggle} />{" "}
      </Nav>{" "}
    </div>
  );
};

export default Header;
