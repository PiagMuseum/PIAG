import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const ActivitisesSection = () => {

return(
<Container fluid className="activities-section">
          <Container>
            <Row>
              <Col md={12} className="activities-align">
                <h3>
                  <b className="red">Museum's activities</b>
                </h3>
                <p>
                  There is evidence that engagement with artistic activities,
                  whether as an observer or a creator, enhances one's moods and
                  emotions, along with benefiting one’s psychological,
                  psychosocial and physiological state. This is why PIAG puts an
                  enormous amount of effort in creating outreach programs that
                  will touch the lives of many.
                  <br></br>
                  <br></br>
                  We are absolutely committed to conceptualize art projects with
                  the means to involve participants including both active and
                  passive audiences (art providers and art recipients).
                  <br></br>
                  <br></br>
                  Our activities are:
                  <br></br>
                  <h5>
                    <b className="red">Earth & Water</b>
                  </h5>
                  <h5>
                    <b className="red">Paint & Plant</b>
                  </h5>
                  <h5>
                  <b className="red">Art Exhibitions</b>
                </h5>
                <h5>
                  <b className="red">Art Workshops</b>
                </h5>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>


    );
}

export default ActivitisesSection;