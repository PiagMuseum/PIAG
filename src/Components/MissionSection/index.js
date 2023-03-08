import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const MissionSection = () => {
  return (
    <Container fluid className="mission-section">
      <Container>
        <Row>
          <Col md={12} className="mission-align">
            <h3>
              <b className="red">Our Mission</b>
            </h3>
            <p>
              PIAG MUSEUM is dedicated to educate, plan, organize, promote and
              showcase the visual arts in all its forms and manifestations
              throughout our community in Florida, Nationwide and Worldwide. Art
              is an important tool to provide opportunities for self-expression.
              We believe that art is a fundamental element in any healthy
              society , this is why we put an enormous amount of effort in
              creating outreach programs that will touch the lives of many. This
              concept motivates PIAG Museum to provide art education to the
              community through different programs and art exhibitions for the
              enjoyment of the artist and the public in general. Today we are
              proud to say, our mission and our goals have taken us to places,
              to people, to communities that have welcomed our knowledge, our
              services and our love for art with opened arms.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MissionSection;
