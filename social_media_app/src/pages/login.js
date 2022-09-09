import {
  Button,
  Checkbox,
  TextField,
  Typography,
  Link,
  CardMedia,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import RecipeReviewCard from "./card";
import Google from "../assets/image2.png";
import Logimg from "../assets/logimg.jpg";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import CircularIntegration from "./loader";
import { LoadingButton } from "@mui/lab";
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("*please enter a valid email address")
      .required("*email is required"),
    password: Yup.string()
      .min(8, "password must be 8 characters long!")
      .max(30, "password must not exceed 30 characters!")
      .required("password is required"),
    checkbox: Yup.bool().required("*please check this"),
  });
  const auth = getAuth();

  async function signInWithEmailAndPasswordFb(email, password) {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setError({ type: "success", message: "logged in succesfully" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ type: "error", message: "login failed" });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const provider = new GoogleAuthProvider();
  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const Navigate = useNavigate();
  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={6}>
          <CardMedia
            sx={{ height: "100%" }}
            component="img"
            src={Logimg}
            alt="Paella dish"
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "50%",

              height: "100vh",
              justifyContent: "center",
            }}
          >
            <Box sx={{ padding: "20px" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "700",
                  fontSize: "36px",
                  lineHeight: "49px",
                  color: "#525252",
                }}
              >
                Login To Your Account
                <Typography variant="subtitle1" gutterBottom>
                  See what is going on with your business
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Google} sx={{ justifyContent: "center" }} />
                <Button
                  variant="contained"
                  onClick={signInWithGoogle}
                  sx={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "19px",
                    textAlign: "center",
                  }}
                >
                  Continue with google
                </Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#525252",
                    my: 4,
                  }}
                >
                  ------------- or Sign in with Email -------------
                </Typography>
              </Box>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  checkbox: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // alert(JSON.stringify(values, null, 2));
                  signInWithEmailAndPasswordFb(values.email, values.password);
                  alert("login successfuly");
                }}
              >
                {(props) => (
                  <Form
                    onSubmit={props.handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#828282",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      label="email"
                      variant="outlined"
                      id="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      onChange={props.handleChange}
                      value={props.values.email}
                      error={props.touched.email && props.errors.email}
                      helperText={props.touched.email && props.errors.email}
                      onBlur={props.handleBlur}
                    />

                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: "#828282",
                      }}
                    >
                      Password
                    </Typography>
                    <TextField
                      label="password"
                      variant="outlined"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      onChange={props.handleChange}
                      value={props.values.password}
                      error={props.touched.password && props.errors.password}
                      helperText={
                        props.touched.password && props.errors.password
                      }
                      onBlur={props.handleBlur}
                    />

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        value={props.values.checkbox}
                        onChange={(e, checked) =>
                          props.setFieldValue("checkbox", checked)
                        }
                        // value={props.values.checkbox}
                        error={props.touched.checkbox && props.errors.checkbox}
                        helperText={
                          props.touched.checkbox && props.errors.checkbox
                        }
                        onBlur={props.handleBlur}
                      />
                      <Typography sx={{ flexGrow: 1 }}>remeber me</Typography>
                      <Link>Forgot Password?</Link>
                    </Box>
                    {/* <Button
                      variant="contained"
                      type="submit"
                      //onClick={() => Navigate("/home")}
                      onClick={handleClick}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "13px 10px 12px",
                        gap: "13px",
                        width: "420px",
                        height: "50px",
                        background: "#7F265B",
                        borderRadius: "6px",
                      }}
                    >
                      LogIn
                    </Button> */}

                    {loading ? (
                      <LoadingButton
                        loading
                        loadingIndicator="Loading…"
                        variant="outlined"
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "13px 10px 12px",
                          gap: "13px",
                          width: "420px",
                          height: "50px",
                          background: "#7F265B",
                          borderRadius: "6px",
                          backgroundColor: "white",
                        }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        type="submit"
                        // onClick={() => Navigate("/home")}
                        onClick={handleClick}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "13px 10px 12px",
                          gap: "13px",
                          width: "420px",
                          height: "50px",
                          background: "#7F265B",
                          borderRadius: "6px",
                        }}
                      >
                        LogIn
                      </Button>
                    )}
                    {error.type === "success" ? (
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          This is a success message!
                        </Alert>
                      </Snackbar>
                    ) : (
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="error"
                          sx={{ width: "100%" }}
                        >
                          This is an error message!
                        </Alert>
                      </Snackbar>
                    )}
                    <Box sx={{ my: 10 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "25px",
                          color: "#828282",
                          flexGrow: 2,
                        }}
                      >
                        Not Registered yet?
                        <Link
                          onClick={() => Navigate("/signup")}
                          sx={{
                            fontweight: 600,
                            fontSize: "18px",
                            lineheight: "25px",
                            color: "#7F265B",
                          }}
                        >
                          Create an account
                        </Link>
                      </Typography>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
