import { Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Home = ({ title, description }) => {
  return (
    MySwal.fire({
      title: "Tugas React Course",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      html: "Album API dan Posts API",
      icon: "info",
    }),
    (
      <Container className="pt-5">
        <div className="my-5">
          <h1 className="text-center">{title}</h1>
          <p className="text-primary text-center">{description}</p>
        </div>
        <Container className="my-4 d-flex flex-column gap-2">
          <a href="/albums">
            <Card className="bg-dark text-white border-0">
              <Card.Img
                src="https://source.unsplash.com/1200x400/?albums"
                alt="Card image"
                className="img-overlay"
              />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                <Card.Title>
                  <h3>Albums</h3>
                  <small>Collection</small>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </a>

          <a href="/posts">
            <Card className="bg-dark text-white border-0">
              <Card.Img
                src="https://source.unsplash.com/1200x400/?posts"
                alt="Card image"
                className="img-overlay"
              />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title>
                  <h3>Posts</h3>
                  <small>Collection</small>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </a>
        </Container>
      </Container>
    )
  );
};

export default Home;
