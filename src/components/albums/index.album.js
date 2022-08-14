//children component
import React from "react";
import { Container } from "react-bootstrap";
import Collections from "./collections.album";


const Albums = ({ title, description }) => {
  // const { title, description } = props;


  return (
    <React.Fragment>
      <Container className="mt-5">
        <h2>{ title }</h2>
        <i>{ description }</i>
        <Collections />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
