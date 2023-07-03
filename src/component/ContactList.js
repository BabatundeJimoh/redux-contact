import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

const ContactList = (props) => {
  return (
    <Container>
      <Row>
        {props.contactsData.map((contact, index) => {
          return <Contact contactInfo={contact} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default ContactList;
