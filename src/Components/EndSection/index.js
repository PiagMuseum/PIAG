import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Proclaim from "../../Assets/proclaim.jpg";
import Disney from "../../Assets/disney.jpg";
import Image from "react-bootstrap/Image";
import "./style.css";

const EndSection = () => {

return(
    <Container fluid className="end-section">
          <Container>
            <Row>
              <Col md={12} className="end-description">
                <h1 style={{ fontSize: "1.2em"}}>
                Today we are proud to say, our mission and our goals have taken us to places, to people, to communities that have welcomed our knowledge, our services and our love for art with opened arms. And on their behalf we will continue to do so for many years to come.
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="end-align">
                <Image className="img-fluid" src={Proclaim} />
              </Col>
              <Col md={6} className="end-align">
                <Image className="img-fluid" src={Disney} />
              </Col>
            </Row>
          </Container>
        </Container>


    );
}

export default EndSection;