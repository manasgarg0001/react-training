import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <h1>page not found</h1>
      <button onClick={() => history.push("/")}>Back to Home Page</button>
    </>
  );
};
export default NotFound;
