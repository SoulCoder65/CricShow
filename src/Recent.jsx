import React, { useEffect, useState } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MatchCardRecent from "./MatchCardRecent";
// API KEY
const api_key = process.env.REACT_APP_CRIC_API;

const Recent = () => {
  const [matches, SetMatches] = useState([]);
  useEffect(() => {
    fetch(`https://cricapi.com/api/cricket/?apikey=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        SetMatches(data.data);
      });
  });

  return (
    <>
      <div className="cards-section">
        {matches.map((dt, index) => {
          return (
            <>
              <MatchCardRecent key={index} data={dt} id={index} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Recent;
