import { Container } from "react-bootstrap";
import Navigation from "./nav.layouts";
import React from "react";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default MainLayouts;
