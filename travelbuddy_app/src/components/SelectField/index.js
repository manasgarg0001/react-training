import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MUIDatePicker from "../DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const currencies = [
  {
    value: null,
    label: "- Choose a country -",
  },
  {
    value: "ESP",
    label: "Spain",
  },
  {
    value: "ENG",
    label: "England",
  },
  {
    value: "JP",
    label: "Japan",
  },
  {
    value: "RUS",
    label: "Russia",
  },
];
const person = [
  {
    value: null,
    label1: "- Select count of person -",
  },
  {
    value: "1",
    label: "One",
  },
  {
    value: "2",
    label: "Two",
  },
  {
    value: "3",
    label: "Three",
  },
  {
    value: "4",
    label: "Four",
  },
  {
    value: ">4",
    label: "More than Four",
  },
];

export default function SelectTextFields() {
  const [place, setPlace] = React.useState("");
  const [person, setPerson] = React.useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
  };
  const handlleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        mt: "15px",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-place"
        select
        label="Choose Place"
        value={place}
        onChange={handleChange}
        // helperText="Please select your destination"
        sx={{ color: "blue" }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <MUIDatePicker />
      <MUIDatePicker />
      <TextField
        id="outlined-select-place"
        select
        label="Person"
        value={place}
        onChange={handleChange}
        // helperText="Please select your destination"
        sx={{ color: "blue" }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff5733",
          width: "25ch",
          m: "8px",
        }}
      >
        Search
      </Button>
    </Box>
  );
}
