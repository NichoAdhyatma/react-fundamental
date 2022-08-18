import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Home = ({ title, description }) => {
  return (
    MySwal.fire({
      title: "Tugas React Course",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      html: "Album API dan Posts API",
      icon: "info",
    }),
    <Container>
      <div className="my-5">
        <h1 className="text-center">{title}</h1>
        <p className="text-primary text-center">{description}</p>
      </div>
    </Container>
  );
};

export default Home;
