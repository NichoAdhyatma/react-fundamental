import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Card, Row } from "react-bootstrap";
import Modals from "../utilities/modals";
import Loaders from "../utilities/loaders";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const MySwal = withReactContent(Swal);

const PostsCollection = ({ theme }) => {
  const [posts, setPosts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [dataPost, setDataPost] = useState([]);
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(true);
  const [bgCard, setBgCard] = useState("bg-light");


  useEffect(() => {
    let flush = false;

    if (theme) setBgCard("bg-dark");
    else setBgCard("bg-light");
    
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
  }, [limit, theme]);

  if (loading) return <Loaders />;
  // dark mode in every refresh bug!

  return (
    <React.Fragment>
      <Alert variant="info">
        <h5 className="my-3">
          <i className="bi bi-info-circle-fill me-1"></i> Show {limit} Posts
          Collection
        </h5>
      </Alert>
      <Row className="d-flex align-items-center">
        {console.log(posts)}
        {posts.map((post, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <Card className={bgCard + ' me-1 border-0 shadow card-posts'}>
                <Card.Body>
                  <Card.Title
                    className="title-card h-25 mb-3"
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
                  <Button
                    variant="info"
                    className="w-100 mt-4"
                    onClick={() => {
                      setModalShow(true);
                      setDataPost({
                        id: post.id,
                        user: post.userId,
                        title: post.title,
                        body: post.body,
                      });
                    }}
                  >
                    <i className="bi bi-info-circle me-1"></i> Info
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
          theme={theme}
        />
      </>
      <div className="d-flex justify-content-center my-5 gap-3">
        <Button variant="primary" onClick={() => setLimit((prev) => prev + 3)}>
          <AiFillPlusCircle /> Tampilkan lebih
          banyak
        </Button>
        <Button
          variant="danger"
          id="min"
          onClick={() => {
            if (limit === 3) {
              MySwal.fire({
                title: "cukup bro..",
                text: "jangan di kurangi lagi",
                timer: 3000,
                icon: "info",
              });
            }
            setLimit((prev) => (prev <= 3 ? 3 : prev - 3));
          }}
        >
          <AiOutlineMinusCircle /> Tampilkan lebih
          sedikit
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PostsCollection;
