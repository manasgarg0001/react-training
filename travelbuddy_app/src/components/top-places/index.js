import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import img from "../../assets/images/img-box-01.png";
import img1 from "../../assets/images/img-box-02.png";
import img2 from "../../assets/images/img-box-03.png";
import img3 from "../../assets/images/img-box-04.png";

const Visit = () => {
  return (
    <Container maxWidth={false}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "36px",
          lineHeight: "44px",
          textAlign: "center",
          letterSpacing: "0.05em",
          color: "#041562",
          paddingTop: "40px",
        }}
      >
        Top Places To Visit
      </Typography>

      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "22px",
          textAlign: "center",
          letterSpacing: "0.05em",
          color: "#626262",
        }}
      >
        The Best Place to Stay in Indonesia
      </Typography>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "60px" }}
      >
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              width="500px"
              height="415px"
              image={img}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              width="500px"
              height="415px"
              image={img1}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              width="631px"
              height="415px"
              image={img2}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              width="631px"
              height="415px"
              image={img3}
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Visit;
