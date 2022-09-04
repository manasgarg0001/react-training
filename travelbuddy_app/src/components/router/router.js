import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../navbar";
import Contact from "../../components/pages/contact";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/package">
          <Contact />
        </Route>
        <Route path="/place">
          <Contact />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
};
export default Routes;
