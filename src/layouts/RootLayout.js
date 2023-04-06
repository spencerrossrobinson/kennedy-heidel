import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                nav
                inNavbar
              >
                <DropdownToggle nav caret style={{ color: "#4FAAA7" }}>
                  EXPERTISE
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      to="/social"
                      className="nav-link"
                      style={{ color: "#c6460f" }}
                    >
                      Social
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/digital"
                      className="nav-link"
                      style={{ color: "#eac761" }}
                    >
                      Digital
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/print"
                      className="nav-link"
                      style={{ color: "#b7cf99" }}
                    >
                      Print
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/collateral"
                      className="nav-link"
                      style={{ color: "#f7892e" }}
                    >
                      Collateral
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/web"
                      className="nav-link"
                      style={{ color: "#4FAAA7" }}
                    >
                      Web
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
                <Link to="https://www.instagram.com/kennedyheidel/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-2"
                    size="2x"
                    style={{ color: "#4FAAA7" }}
                  />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="https://www.linkedin.com/in/kennedyheidel/">
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
