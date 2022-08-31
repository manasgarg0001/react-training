import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Vector2 from "../../assets/icons/Vector2.png";
import { Box } from "@mui/system";
import React from "react";

const Footer = (props) => {
  return (
    <Box sx={{ paddingTop: "100px" }}>
      <Box sx={{ paddingTop: "80px", backgroundColor: "#19224D" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "90px",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={3}>
            <CardMedia
              component="img"
              height="100%"
              image={Vector2}
              alt="green iguana"
            />
            <Typography sx={{ fontSize: 44, color: "white" }} gutterBottom>
              Travel Buddy
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
                gutterBottom
              >
                DISCOVER DESTINATION
              </Typography>
              <List
                sx={{
                  color: "white",
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    webKitAlignItems: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <ListItemText>Bali</ListItemText>
                  <ListItemText>Karimun Jawa</ListItemText>
                  <ListItemText>Jepara</ListItemText>
                  <ListItemText>Lombok</ListItemText>
                  <ListItemText>Yogyakarta</ListItemText>
                  <ListItemText>Flores</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",

                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
                CONTACT US
              </Typography>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <address>
                  <p>24 Shipley St.Arvada, CO 80003</p>
                  <p>09378493810</p>
                  <p>TravelBuddy@gmail.com</p>
                </address>
              </Box>
              <Box sx={{}}>
                <Typography sx={{ fontSize: 14, color: "orange" }} gutterBottom>
                  Social media
                </Typography>
                <FacebookIcon sx={{ color: "white" }} />
                <TwitterIcon sx={{ color: "white" }} />
                <InstagramIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#000B3E",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
          @Copyright 2022 TravelBuddy
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
