import React from "react";
import NavBar from "../../components/navbar";
import InputForm from "../../components/form/form";
import CardBuddy from "../../components/card";
import Footer from "../../components/footer/index";
import Vector from "../../assets/icons/Vector.png";
import Rectangleimg from "../../assets/images/Rectangle.png";
import Banner_bg from "../../assets/images/banner_bg.png";
import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <Box>
        <CardBuddy image={Banner_bg}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "96px",
                lineHeight: "116px",
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "white" }}
            >
              Critics and recommendation for us
            </Typography>
          </Box>
        </CardBuddy>
        <Container maxWidth={false} sx={{ maxWidth: "90%", py: "116px" }}>
          <CardBuddy image={Rectangleimg} sx={{ width: "100%" }} />
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 2, md: 5 }}
            sx={{ marginTop: "100px" }}
          >
            <Grid item xs={6}>
              <Box>
                <InputForm />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    alignItems: "center",
                    alignContent: "center",
                    pl: "30px",
                  }}
                >
                  <HomeIcon fontSize="large" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "auto",
                      alignItems: "left",
                      alignContent: "center",

                      pl: "30px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      letterSpacing="0.1em"
                    >
                      Manali, Himachal Pardesh
                    </Typography>
                    <Typography gutterBottom color="#606060">
                      India
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    alignItems: "center",
                    alignContent: "center",
                    mt: "15px",
                    pl: "30px",
                  }}
                >
                  <PhoneAndroidIcon fontSize="large" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "auto",
                      alignItems: "left",
                      alignContent: "center",

                      pl: "30px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      letterSpacing="0.1em"
                    >
                      (024) 123981240
                    </Typography>
                    <Typography gutterBottom color="#606060">
                      Mon to Fri 9am to 6pm
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    alignItems: "center",
                    alignContent: "center",
                    mt: "15px",
                    pl: "30px",
                  }}
                >
                  <EmailIcon fontSize="large" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "auto",
                      alignItems: "left",
                      alignContent: "center",

                      pl: "30px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      letterSpacing="0.1em"
                    >
                      travelbuddy@gmail.com
                    </Typography>
                    <Typography gutterBottom color="#606060">
                      Send us your query anytime!
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};
export default Contact;
