import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <h4 className="white">For more information please contact</h4>
      <Col className="white">
        <p>Mireya Perez-Power</p>
        <p>President & Director</p>
        <p>Email: Ayerimzerep@gmail.com</p>
        <p>Phone: 305-443-0770</p>
      </Col>
      <Col className="white">
      <p>Martha Power-Perez</p>
        <p>Coordinator</p>
        <p>Email: marthapower@mac.com</p>
        <p>Phone: 786-712-2872</p>
      </Col>
      </Row>
      <Row>
        <Col md="true" className="footer-copywright">
          <h3>Copyright © {year} PIAG MUSEUM</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;