import * as React from "react";
import Card from "@mui/material/Card";

import { Box, Button, Typography } from "@mui/material";

const CardBuddy = (props) => {
  return (
    <Card sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "100% 100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "50px",
        }}
      >
        {props.children}
      </Box>
    </Card>
  );
};
export default CardBuddy;
