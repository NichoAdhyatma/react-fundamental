import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row } from "react-bootstrap";
import Modals from "../utilities/modals";
import Loaders from "../utilities/loaders";

const PostsCollection = () => {
  const [posts, setPosts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [dataPost, setDataPost] = useState([]);
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let flush = false;

    if (!flush) {
      setLoading(true);

      axios({
        method: `GET`,
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setPosts(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

      return () => {
        flush = true;
      };
    }
  }, [limit]);

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h4 className="my-3 text-primary">{limit} Posts Collection</h4>
      <Row className="d-flex align-items-center">
        {posts.map((post, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <Card className="card-posts">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/500x400/?programming"
                />
                <Card.Body>
                  <Card.Title
                    className="title-card"
                    onClick={() => {
                      setModalShow(true);
                      setDataPost({
                        id: post.id,
                        title: post.title,
                        body: post.body,
                      });
                    }}
                  >
                    <h6>{post.title}</h6>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setModalShow(true);
                      setDataPost({
                        id: post.id,
                        title: post.title,
                        body: post.body,
                      });
                    }}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
      <>
        <Modals
          show={modalShow}
          data={dataPost}
          onHide={() => setModalShow(false)}
        />
      </>
      <div className="d-flex justify-content-center my-5">
        <Button
          variant="outline-primary"
          onClick={() => setLimit((prev) => prev + 3)}
        >
          Tampilkan lebih banyak
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PostsCollection;
