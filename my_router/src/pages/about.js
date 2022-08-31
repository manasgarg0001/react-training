import React from "react";
import { useLocation, useHistory } from "react-router-dom";
const About = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <h1>About {location.pathname.replace("/", "")} US</h1>
      {location.pathname === "/about/manas" ? (
        <p>hello Manas,good to see you</p>
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
export default About;
