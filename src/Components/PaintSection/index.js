import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import paint1 from "../../Assets/paintpot1.JPG";
import paint2 from "../../Assets/paintpot2.JPG";
import paint3 from "../../Assets/Piantpot3.JPG";
import paint4 from "../../Assets/paintpot4.JPG";
import Grid from "@material-ui/core/Grid";
import Image from "react-bootstrap/Image";

import "./style.css";

const PaintSection = () => {
  return (
    <Container fluid className="paint-section">
      <Container>
        <Row>
          
          <Col md={12} className="paint-description">
            <h1 style={{ fontSize: "2.6em" }}>PIAG Museum: Paint and Plant</h1>
            <p className="paint-body">
              Knowing the importance of learning how to love, to protect and to
              take care of our planet, we are also aiming to create awareness
              with this project. Participants will paint on a terracota pot and
              bring home their art with a small plant inside.
            </p>
          </Col>
        </Row>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ paddingLeft: "25px", padding: "35px" }}
        >
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image src={paint1} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image src={paint2} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image src={paint3} loading="lazy" className="img-fluid" />
          </Grid>
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image src={paint4} loading="lazy" className="img-fluid" />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default PaintSection;
