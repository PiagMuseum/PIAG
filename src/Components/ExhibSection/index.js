import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Exhibit1 from "../../Assets/exhibit1.jpg";
import "./style.css";

const ExhibSection = () => {
  return (
    <Container fluid className="exhib-section">
      <Container>
        <Row>
          <Col md={12} className="exhib-description">
            <h1 style={{ fontSize: "2.6em" }}>PIAG Museum: Art Exhibitions</h1>
            <Image className="img-fluid" src={Exhibit1} />
            <p className="exhib-body">
              Art must be experienced in person to truly get a sense of its
              magnitude and to truly appreciate it. What a better way to expose
              the artist work and for the public to appreciate it than with Art
              exhibitions. Many artist are rejected in art galleries because
              they do not have an extensive curriculum. Piag Museum gives
              opportunity to artists of all ages to showcase their work
              considering more their talent, creativity and quality of art work
              rather than his resume. We will continue to do Art exhibitions and
              also floating art exhibitions for the enjoyment of the young and
              old.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExhibSection;
