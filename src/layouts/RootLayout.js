import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header>
        <Navbar
          className="custom-nav"
          expand="md"
          fixed="top"
          style={{ background: "white" }}
        >
          <NavbarBrand href="/">Kennedy Heidel</NavbarBrand>
          <NavbarText style={{ color: "#4EB03E" }}>Copywriter.</NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/gallery" className="nav-link">
                  GALLERY
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
