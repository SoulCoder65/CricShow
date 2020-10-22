import React, { useEffect, useState } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MatchCard from "./MatchCard";
import MatchCardUpcoming from "./MatchCardUpcoming";
// API KEY
const api_key = "nHAtnGdDkYSo6hq9AoYE6EHrTuf2 ";

const UpcomingMatch = () => {
  const [matches, SetMatches] = useState([]);
  useEffect(() => {
    fetch(`https://cricapi.com/api/matchCalendar/?apikey=${api_key}`)
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
              <MatchCardUpcoming key={index} data={dt} id={index} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default UpcomingMatch;
