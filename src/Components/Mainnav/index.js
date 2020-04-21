import React from "react";
import { ReactComponent as ReactLogo } from "../../images/YouTubeLogo.svg";
import { Navbar, Nav } from "react-bootstrap";
import Userdropdown from "../Userdropdown";
import { Userarea, Welcomemessage } from "./style.js";
function Mainnav() {
  const logo = {
    height: "40px",
  };
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Navbar.Brand href="#home">
        <ReactLogo style={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Userarea>
            <Welcomemessage> اهلا ومرحبا بك</Welcomemessage>
            <Userdropdown />
          </Userarea>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Mainnav;
