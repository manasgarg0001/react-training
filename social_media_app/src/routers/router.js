import React from "react";
import { Route, Routes } from "react-router-dom";
import Group from "../pages/group";
import Home from "../pages/home";
import Live from "../pages/live";
import Login from "../pages/login";
import MarketPlace from "../pages/marketplace";
import Messenger from "../pages/messenger";
import Notification from "../pages/notification";
import SignUp from "../pages/signup";
import Watch from "../pages/watch";
import GridLayout from "../util/gridlayout";

const Router1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <GridLayout>
            <Home />
          </GridLayout>
        }
      />
      <Route
        path="/marketplace"
        element={
          <GridLayout>
            <MarketPlace />
          </GridLayout>
        }
      />
      <Route
        path="/group"
        element={
          <GridLayout>
            <Group />
          </GridLayout>
        }
      />
      <Route
        path="/live"
        element={
          <GridLayout>
            <Live />
          </GridLayout>
        }
      />
      <Route
        path="/notification"
        element={
          <GridLayout>
            <Notification />
          </GridLayout>
        }
      />
      <Route
        path="/watch"
        element={
          <GridLayout>
            <Watch />
          </GridLayout>
        }
      />
      <Route
        path="/messenger"
        element={
          <GridLayout>
            <Messenger />
          </GridLayout>
        }
      />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
export default Router1;
