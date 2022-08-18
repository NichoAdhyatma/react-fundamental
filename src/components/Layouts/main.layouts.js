import { Container } from "react-bootstrap";
import React from "react";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default MainLayouts;
