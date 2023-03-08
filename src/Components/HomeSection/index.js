import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const HomeSection = () => {

return(
<Container fluid className="home-section">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="home-heading">
                  Explore the Wonders of Art at PIAG Museum{" "}
                </h1>
                <p className="home-body">
                  PIAG Museum created in 2003 is a non-profit organization 501
                  C3. PIAG Museum is your one-stop-shop for exploring the
                  wonders of art. Featuring a wide array of visual arts from
                  different cultures and eras, PIAG Museum offers something for
                  everyone. Come discover the beauty of painting, sculpture,
                  photography, and more at PIAG Museum!
                </p>
              </Col>
            </Row>
          </Container>
        </Container>


    );
}

export default HomeSection;
