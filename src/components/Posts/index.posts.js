import { Container } from "react-bootstrap";
import PostsCollection from "./postsCollection";

const Posts = ({ title, description, theme }) => {
  return (
    <Container className="pt-5">
      <div className="my-5">
        <h1 className="text-center">{title}</h1>
        <p className="text-primary text-center">{description}</p>
      </div>
      <PostsCollection theme={theme}/>
    </Container>
  );
};

export default Posts;
