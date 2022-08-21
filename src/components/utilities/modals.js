import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function Modals(props) {
  return (
    <React.Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ➡️ Post id : {props.data.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>User id : {props.data.user}</h5>
          <h5>Title : {props.data.title}</h5>
          <p>Body : {props.data.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Modals;
