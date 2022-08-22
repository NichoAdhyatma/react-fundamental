import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsFillFilePostFill } from "react-icons/bs";
import { useState,useEffect } from "react";

const Navigation = ({ theme }) => {
  const [dark, setDark] = useState("light");
  
  useEffect(() => {
    if (theme) setDark("dark");
    else setDark("light");
  }, [theme])

  return (
    <Navbar bg={dark} variant={dark} expand="lg" className="fixed-top shadow">
      <Container fluid className="px-3 py-2">
        <Navbar.Brand href="/">React-Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link": "" +
                  " d-flex align-items-center nav-link gap-1"
              }
            >
              <AiFillHome /> Home
            </NavLink>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link" : "" + 
                  " d-flex align-items-center nav-link gap-1"
              }
            >
              <BiPhotoAlbum /> Albums
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link" : "" + 
                  " d-flex align-items-center nav-link gap-1"
              }
            >
              <BsFillFilePostFill /> Posts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
