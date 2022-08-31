import React from "react";
import { useLocation, useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <h1>Home {location.pathname.replace("/", "")}Page</h1>
      <button className="btn" onClick={history.goBack}>
        go back
      </button>
    </>
  );
};
export default Home;
