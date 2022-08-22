import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modals(props) {
  const [dark, setDark] = useState("bg-light");

  useEffect(() => {
    if (props.theme) setDark("bg-dark");
    else setDark("bg-light");
  }, [props.theme]);

  return (
    <React.Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={dark}>
          <Modal.Title id="contained-modal-title-vcenter">
            ➡️ Post id : {props.data.id}
          </Modal.Title>
          <Button variant="danger" onClick={props.onHide}>
            <AiOutlineClose />
          </Button>
        </Modal.Header>
        <Modal.Body className={dark}>
          <h5>User id : {props.data.user}</h5>
          <h5>Title : {props.data.title}</h5>
          <p>Body : {props.data.body}</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Modals;
