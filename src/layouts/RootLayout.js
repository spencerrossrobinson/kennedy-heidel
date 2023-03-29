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
import { Outlet, NavLink, Link } from "react-router-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "../helper/ScrollToTop";

//root layout page that displays the navbar, all other routes are nested in this one
const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header>
        {/* navbar set up with react navigation, simple and sleek */}
        <Navbar
          className="custom-nav"
          expand="md"
          fixed="top"
          style={{ background: "white" }}
        >
          <NavbarBrand href="/" className="header-font">
            Kennedy Heidel
          </NavbarBrand>
          <NavbarText style={{ color: "#4FAAA7" }}>Copywriter.</NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{ color: "#C6460F" }}
                >
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/gallery"
                  className="nav-link"
                  style={{ color: "#F7892E" }}
                >
                  GALLERY
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="https://www.instagram.com/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-2"
                    size="2x"
                    style={{ color: "#4FAAA7" }}
                  />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="https://www.linkedin.com/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="mx-2"
                    size="2x"
                    style={{ color: "#4FAAA7" }}
                  />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
