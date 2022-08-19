import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, ButtonGroup } from "react-bootstrap";
import Loaders from "../utilities/loaders";

const Collections = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let flush = false;
    if (!flush) {
      setLoading(true);
      axios({
        method: `GET`,
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

      return () => {
        flush = true;
      };
    }
  }, [limit]);

  const handleLimit = (props) => {
    if (props === "+") {
      setLimit((prev) => prev + 1);
    }
    if (props === "-") {
      setLimit((prev) => (prev <= 1 ? 1 : prev - 1));
    }
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>{limit} collection</h3>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <ButtonGroup className="d-flex justify-content-center mt-3">
        <button className="btn btn-success" onClick={() => handleLimit("+")}>
          +
        </button>
        <button className="btn btn-danger" onClick={() => handleLimit("-")}>
          -
        </button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collections;
