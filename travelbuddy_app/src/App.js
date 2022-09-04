import "./App.css";
import NavBar from "./components/navbar";
import CardBuddy from "./components/card";
import banner_bg from "./assets/images/banner_bg.png";
import event from "./assets/images/event_bg1.png";
import Vector from "./assets/icons/Vector.png";
import SubNav from "./components/subnav/index";
import Visit from "./components/top-places/index";
import Contact from "./components/pages/contact";
import { Box, Button, Rating, Switch, Typography } from "@mui/material";
import Hotel from "./components/top-hotel/index";
import Footer from "./components/footer/index";
import WhatTheySaid from "./components/whytheysaid";
import image1 from "./assets/images/img-card-hotel-01.png";
import image2 from "./assets/images/img-card-hotel-02.png";
import image3 from "./assets/images/img-card-hotel-03.png";
import image4 from "./assets/images/img-card-tsp-01.png";
import image5 from "./assets/images/img-card-tsp-02.png";
import image6 from "./assets/images/img-card-tsp-03.png";
import BestService from "./components/best-services";
import { Route } from "react-router-dom";
import Routes from "./components/router/router";

function App() {
  return (
    <>
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
