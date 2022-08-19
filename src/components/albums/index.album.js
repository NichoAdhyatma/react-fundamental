//children component
import { Container } from "react-bootstrap";
import Collections from "./collections.album";

const Albums = ({ title, description }) => {
  return (
    <Container className="pt-5">
      <div className="my-5">
        <h1 className="text-center">{title}</h1>
        <p className="text-primary text-center">{description}</p>
      </div>
      <Collections />
    </Container>
  );
};

export default Albums;
