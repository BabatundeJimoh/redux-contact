import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./component/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./component/Contact";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <ContactForm />
        </Col>
        <Col>
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
