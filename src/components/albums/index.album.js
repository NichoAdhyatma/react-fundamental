//children component
import React from "react";
import { Container } from "react-bootstrap";
import Collections from "./collections.album";

const Albums = ({ title, description }) => {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <h1 className="text-center">{ title }</h1>
        <p className="text-primary text-center">{ description }</p>
        <Collections />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
