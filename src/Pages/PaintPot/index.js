import React from "react";
import { Container, Row, Col } from "react-bootstrap";



const Paint = () => {
    return (

<section>
        <Container fluid className="dir-section">
        <Container className="dir-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               Our Supporters
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
           
            <Col md={12} className="myAvtar">
             
            </Col>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                
                
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
</section>
 )
}

export default Paint;