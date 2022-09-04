import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")

    .required("this field is required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("this field is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  subject: Yup.string().required("this field is required"),
});

const InputForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          message: "",
          firstName: "",
          email: "",
          subject: "",
        }}
        validationSchema={SignupSchema}
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
              value={props.values.message}
              onChange={props.handleChange}
              error={props.errors.message}
              helperText={props.errors.message}
              onBlur={props.handleBlur}
            />

            <TextField
              id="firstName"
              name="firstName"
              placeholder="Enter your name"
              value={props.values.firstName}
              onChange={props.handleChange}
              error={props.errors.firstName}
              helperText={props.errors.firstName}
              onBlur={props.handleBlur}
            />

            <TextField
              id="email"
              name="email"
              placeholder="Enter your email"
              type={"email"}
              value={props.values.email}
              onChange={props.handleChange}
              error={props.errors.email}
              helperText={props.errors.email}
              onBlur={props.handleBlur}
            />

            <TextField
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              type={"subject"}
              value={props.values.subject}
              onChange={props.handleChange}
              error={props.errors.subject}
              helperText={props.errors.subject}
              onBlur={props.handleBlur}
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



//https://codesandbox.io/s/wonderful-bassi-0ff5vz?file=/src/form.js:0-1764
