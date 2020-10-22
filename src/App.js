import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Navbar } from "./Navbar";
import UpcomingMatch from "./UpcomingMatch";
import Recent from "./Recent";
import Playerstats from "./Playerstats";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const dotenv = require("dotenv").config();
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upcoming" component={UpcomingMatch} />
          <Route exact path="/recent" component={Recent} />
          <Route exact path="/playerstats" component={Playerstats} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
