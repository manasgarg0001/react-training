import React from "react";
import "../input/style.css";
import { Inputstyle } from "./style";
import { TextField } from "@mui/material";
const Input = (props) => {
  const classes = Inputstyle();
  //<input className="inputs" {...props} />;
  return <TextField {...props} />;
};
export default Input;
