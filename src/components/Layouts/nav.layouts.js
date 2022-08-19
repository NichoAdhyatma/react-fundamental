import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="fixed-top shadow">
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
              <i class="bi bi-house me-1"></i>Home
            </NavLink>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <i class="bi bi-images me-1"></i>Albums
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              <i class="bi bi-journal-text me-1"></i> Posts
            </NavLink>
          </Nav>
            <Nav.Link className="ms-auto me-3"><i class="bi bi-moon-fill me-1"></i>Dark Mode</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
