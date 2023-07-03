import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/contactSlice";
import { useEffect } from "react";

const ContactForm = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const currentContact = props.contacts;

  useEffect(() => {
    // Populate the form fields with the current user's data
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
      setLocation(currentContact.location);
    }
  }, [currentContact]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedContactData = {
      id: currentContact.id,
      name: name,
      number: number,
      location: location,
    };

    console.log(updatedContactData);

    dispatch(updateContact(updatedContactData));

    setName("");
    setNumber("");
    setLocation("");
  };

  return (
    <Form onClick={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
