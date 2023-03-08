import React from "react";
import EarthSection2 from "../../Components/EarthSection2";
import Grid from "@material-ui/core/Grid";
import Image from "react-bootstrap/Image";
import Cube2 from "../../Assets/cube2.JPG";
import Cube4 from "../../Assets/cube4.JPG";
import Cube5 from "../../Assets/cube5.jpg";
import Cube6 from "../../Assets/cube6.JPG";
import Cube7 from "../../Assets/cube7.jpg";
import Cube8 from "../../Assets/cube8.jpg";
import Cube9 from "../../Assets/cube9.jpg";
import Cube10 from "../../Assets/cube10.jpg";
import Cube11 from "../../Assets/cube11.jpg";
import Cube12 from "../../Assets/cube12.jpg";
import Cube13 from "../../Assets/cube13.JPG";
import "./style.css";

const Earth = () => {
  return (
    <section>
      <EarthSection2 />
      <container>
        <h1 style={{ fontSize: "2.6em" }}>Cubes Gallery</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ paddingLeft: "25px", padding: "35px" }}
        >
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image className="img-fluid" src={Cube2} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube4} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube5} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube6} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube7} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
                <Image className="img-fluid" src={Cube8} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube9} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube10} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube11} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube12} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
                <Image className="img-fluid" src={Cube13} />
              </Grid>
          
          
        </Grid>
     </container>
    </section>
  );
};

export default Earth;
