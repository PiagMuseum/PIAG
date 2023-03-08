import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Cube3 from "../../Assets/cube3.JPG";
import "./style.css";

const EarthSection2 = () => {
  return (
    <>
      <Container fluid className="earth-section2">
        <Container className="earth-content2">
          <Row>
            <Col md={7} className="earth-header2">
              <h1 style={{ paddingBottom: 15 }} className="earth-heading2">
                “Earth & Water Project”
              </h1>
              <p className="earth-body2">
                In this specific project adults & kids use art eco cubes to
                express the importance of maintaining plants, animals, water and
                the environment in general and also portray our beautiful
                nature. The Eco cubes can be painted, sculpted and use it as the
                main tool to express a message with a positive and educational
                twist. We are committed to bring projects to the community that
                bring awareness and to encourage changes to protect our
                environment.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="earth-section3">
        <Container>
          <Row>
            <h1 style={{ fontSize: "2.6em" }}>Enviromental Art a Big Sucess</h1>
            <Col md={12} className="earth-align">
              <Image className="img-fluid" src={Cube3} />
            </Col>
            <Col md={12} className="earth-description2">
              <p className="earth-body2">
                The Piag Museum presented a unique art exhibition in the form of
                Floating Cubes. Under an environment al theme, this exhibit now
                has hundred cubes designed by various painters, poets,
                sculptors, photographers and also children and youth.
                <br></br>
                <br></br>
                Each cube has a unique message related to the conservation of
                our planet. On January, March & April 2009 participating
                children artists simultaneously placed their artwork in the
                schools pond as part of a ceremony dedicated to our planet.
                <br></br>
                <br></br>
                "The event was also presented earlier this year at the Plaza
                Cascade of The Miami-Dade Cultural Center, Pelican Island and
                St. Thomas University, this exhibit will travel to over 30
                cities, also Public Schools fand Universities from Miami Dade
                County and participants will be recognized for their efforts.
                <br></br>
                <br></br>
                It was free of cost for the public and included a complementary
                brunch and live music. The Mobile Gallery of The Piag Museum, a
                bus which carries art work inside and travels throughout
                Miami-Dade County, was also brought to the event so the public
                could have an opportunity to look at the pieces that hang
                inside.
                <br></br>
                <br></br>
                The Floating Cubes exhibited is one of the various events the
                Art programs organizes in which the community has an opportunity
                to participate and learn about art and students get hands-on
                experience in organizing art events through creative.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default EarthSection2;
