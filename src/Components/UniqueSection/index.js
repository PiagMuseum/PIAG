import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";

const UniqueSection = () => {
  return (
    <Container fluid className="unique-section">
      <Container>
        <Row>
          <Col md={12} className="unique-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Why are we <b className="red">Unique?</b>
            </h1>
            <p className="unique-body">
              <b className="red">1-</b>Instead of the people going to the museum
              we go to the people. This way we can reach hundreds of people in
              one event.
              <br></br>
              <br></br>
              <b className="red">2-</b> Piag Museum gives opportunity to artists
              of all ages to showcase their work . We do beautiful art
              exhibitions for the enjoyment of the community with this artist
              that haven't been able to exhibit because we consider the quality
              of work not their resume.
              <br></br>
              <br></br>
              <b className="red">3-</b> Besides the regular exhibits, floating
              art exhibitions in lakes is a unique way to showcase art and more
              amazing is that the theme is the environment and the awareness
              toward the protection of our planet.Portraying a beautiful
              landscapes or sending a message is a way to use art in an
              educational way.
            </p>
            <br></br>
            <br></br>
            <p>Learn more about the Art Director below!</p>
            <div className="d-grid gap-2">
              <Button variant="info" size="lg" as={Link} to="/director">
                Art Director
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UniqueSection;
