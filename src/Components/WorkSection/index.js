import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Image from "react-bootstrap/Image";
import Work1 from "../../Assets/work1.JPG";
import Work2 from "../../Assets/work2.JPG";
import Work3 from "../../Assets/work3.jpg";
import Work4 from "../../Assets/work4.JPG";
import "./style.css";

const WorkSection = () => {
  return (
    <Container fluid className="work-section">
      <Container>
        <Row>
         
          <Col md={12} className="work-description">
             <h1 style={{ fontSize: "2.6em" }}>PIAG Museum: Art Workshops</h1>
            <p className="work-body">
              Art is an important tool to provide opportunities for
              self-expression. In the Art education we have art workshops at
              schools for the youth, community events art activities, and art
              classes for the adults.
            </p>
            <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ paddingLeft: "25px", padding: "35px" }}
        >
          <Grid item sm={12} md={6} lg={6} xl={6}>
            <Image src={Work1} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <Image src={Work2} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <Image src={Work3} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <Image src={Work4} loading="lazy" className="img-fluid" />
          </Grid>
        </Grid>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WorkSection;
