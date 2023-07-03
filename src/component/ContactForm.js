import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuid(),
      name: name,
      number: number,
      location: location,
    };

    console.log(newContact);

    dispatch(addContact(newContact));

    setName("");
    setNumber("");
    setLocation("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Number:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Location:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
