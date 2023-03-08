import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mayzjrbq");
  if (state.succeeded) {
    return <p>We will contact you soon! Thank you</p>;
  }
  return (
    <>
      <Container fluid className="unique-section">
        <Container>
          <Row>
            <Col md={12} className="unique-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Contact <b className="red">Us!</b>
              </h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    name="message"
                    rows={3}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <Button type="submit" disabled={state.submitting}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ContactForm;
