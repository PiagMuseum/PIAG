import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Cube1 from "../../Assets/cube1.jpg";
import "./style.css";

const EarthSection = () => {
  return (
    <Container fluid className="earth-section">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2.6em" }}>
            PIAG Museum: "Earth & Water Project"
          </h1>
          <Col md={5}>
            <Image className="img-fluid" src={Cube1} />
          </Col>
          <Col md={7} className="earth-description">
            <p className="earth-body">
              In the Art education we have art workshops at schools & community
              events. We have many innovative art projects, the latest one among
              so many we have and that has been very successful and also unique
              is the “Earth & Water Project”.
              <br></br>
              <br></br>
              learn more about the "Earth & Water Project" below.
            </p>
          </Col>
          <div className="d-grid gap-2">
            <Button variant="info" size="lg" as={Link} to="/earthandwater">
              Earth & Water Project
            </Button>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default EarthSection;
