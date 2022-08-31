import React from "react";
import { useLocation, useHistory } from "react-router-dom";
const Contact = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <h1>Hey!! {location.pathname.replace("/", "")} Us</h1>
      {location.pathname === "/contact/manas" ? (
        <p>welcome,how can we help you</p>
      ) : (
        <p>please try again</p>
      )}
      <button onClick={() => history.push("/")}>Home Page</button>
      <button className="btn" onClick={history.goBack}>
        go back
      </button>
    </>
  );
};
export default Contact;
