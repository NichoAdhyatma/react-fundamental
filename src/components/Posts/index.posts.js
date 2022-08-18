import { Container } from "react-bootstrap";
import PostsCollection from "./postsCollection";


const Posts = ({ title, description }) => {
  return (
    <Container>
      <div className="my-5">
        <h1 className="text-center">{title}</h1>
        <p className="text-primary text-center">{description}</p>
      </div>
      <PostsCollection />
    </Container>
  );
};

export default Posts;
