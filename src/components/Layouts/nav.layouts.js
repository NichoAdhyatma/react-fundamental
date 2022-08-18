import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Albums from "../Albums/index.album";
import Home from "../Home/index.home";
import Posts from "../Posts/index.posts";

const Navigation = () => {
  return (
    <Router>
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
      <Routes>
        <Route path="/" element={<Home title="Home" description="Website Albums and Posts" />} />
        <Route
          path="/albums"
          element={<Albums title="Album" description="Album photos API" />}
        />
        <Route
          path="/posts"
          element={<Posts title="Posts" description="Posts API" />}
        />
        <Route
          path="*"
          element={<h1 className="text-center text-danger">404 Not Found</h1>}
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
