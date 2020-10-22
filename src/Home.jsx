import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MatchCard from "./MatchCard";

// API KEY
const api_key = process.env.REACT_APP_CRIC_API;

const Home = () => {
  const [matches, SetMatches] = useState([]);
  useEffect(() => {
    fetch(`https://cricapi.com/api/matches?apikey=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        SetMatches(data.matches);
      });
  });

  return (
    <>
      <div className="cards-section">
        {matches.map((dt, index) => {
          return (
            <>
              <MatchCard key={dt["unique_id"]} data={dt} id={index} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
