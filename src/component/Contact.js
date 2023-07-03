import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditContact from "./EditContact";
import Modal from "react-bootstrap/Modal";
import { editContact, deleteContact } from "../redux/contactSlice";

const Contact = (props) => {
  const { contact } = props;
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [location, setLocation] = useState();

  const state = useSelector((state) => state.contact);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(state);

  //   const handleSubmit = () => {
  //     handleClose();

  //     const newData = {
  //       id: contact.id,
  //       name: name,
  //       number: number,
  //       location: location,
  //     };
  //     dispatch(editContact({ id: contact.id, newData: newData }));
  //   };
  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {state.contacts.map((contact) => {
        return (
          <div>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EditContact contacts={contact} contactId={contact.id} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
            <Card
              style={{
                width: "13rem",
                border: "2px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                variant="top"
                src="data:image/png;base64,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"
              />
              <Card.Body style={{ padding: "1rem" }}>
                <Card.Title
                  style={{
                    marginBottom: "1rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Card Title
                </Card.Title>
                <Card.Text style={{ marginBottom: "0.5rem" }}>
                  <p>
                    <b>Name:</b> {contact.name}
                  </p>
                  <p>
                    <b>Number:</b> {contact.number}
                  </p>
                  <p>
                    <b>Location:</b> {contact.location}
                  </p>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ marginRight: "0.5rem" }}
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
