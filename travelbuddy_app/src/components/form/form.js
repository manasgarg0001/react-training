import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const InputForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          message: "",
          userName: "",
          email: "",
          subject: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          resetForm = {};
        }}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              id="message"
              name="message"
              placeholder="Enter message"
              multiline={true}
              rows={5}
              value={props.values.firstname}
              onChange={props.handleChange}
            />
            <TextField
              id="userName"
              name="userName"
              placeholder="Enter your name"
              value={props.values.firstname}
              onChange={props.handleChange}
            />
            <TextField
              id="email"
              name="email"
              placeholder="Enter your email"
              type={"email"}
              value={props.values.email}
              onChange={props.handleChange}
            />
            <TextField
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              type={"subject"}
              value={props.values.subject}
              onChange={props.handleChange}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#ff5733",
                padding: "15px 30px",
                height: "52px",
                width: "198px",
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputForm;
