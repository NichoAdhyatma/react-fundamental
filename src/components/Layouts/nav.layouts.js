import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="px-3 py-2">
        <Navbar.Brand href="/">React-Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Albums
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Posts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
