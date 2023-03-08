import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Dir from "../../Assets/director.jpg";
import "./style.css";

const Director = () => {
  return (
    <section>
      <Container fluid className="dir-section">
        <Container className="dir-content">
          <Row>
            <Col md={7} className="dir-header">
              <h1 style={{ paddingBottom: 15 }} className="dir-heading">
                About the Director
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="dir-section2">
        <h1>Director Mireya Perez-Power</h1>
        <Image src={Dir} />

        <p className="dir-body">
          Born in Caracas, Venezuela and since very young was interested in the
          arts. Study arts in Florence Italy when she was a young at the Poggie
          Imperiale. Since then her passion have taken her far in the art world.
          She is a well known Venezuelan painter, inventor, art instructor and
          sculptor.
          <br></br>
          <br></br>
          Mrs. Power’s triumphs have not come without taking her years of
          commitment and much effort. As a result, her enthusiastic approach to
          the arts has made her an important icon in Caracas the city where she
          was born and in the city of Miami and beyond. A large number of
          articles have been written regarding her progress, new ideas and
          projects throughout time and in several local, national and
          international publications.
          <br></br>
          <br></br>
          Her art has appeared in several galleries worldwide. Power’s talent
          for capturing the elements of nature: lights, shades and colors
          especially grays and greens provides her works incredible realism.
          <br></br>
          <br></br>
          Her contribution to South Florida community has been recognized with
          numerous letters of supports , awards, commendation and proclamations.
          She received a plaque as one of the 100 successful Hispanic Women.
          <br></br>
          <br></br>
          Creator of the undulating canvas and the floating art cubes. Her
          unique tri-dimensional landscapes on undulating canvases utilize
          classic characteristics in an original new format. The artist titles
          her recent creation “Landscape on waves”.
          <br></br>
          <br></br>
          The Floating art cubes are part of a project she created in which she
          uses this format ( art cubes) to send a message and portray the beauty
          of nature and the need to protect our environment. She is always
          creating and inventing new ways to present art and to showcase it.
          <br></br>
          <br></br>
          President of Power International art gallery in Caracas Venezuela and
          then in Miami Florida Director and founder of Piag Museum since 2003,
          a non profit Organization dedicated to to plan, organize, promote and
          disseminate the visual arts in all its forms and manifestations
          throughout our community, South Florida, Nationwide and Worldwide. She
          promoted emerging as well as established artists by implementing art
          exhibits focused on the individual creative qualities rather than on
          extensive resumes.
          <br></br>
          <br></br>
          Her goal is to continue showcasing her art worldwide and also reach
          many people with the Museum art projects , exhibitions and art
          workshops.
        </p>
      </Container>
    </section>
  );
};

export default Director;
