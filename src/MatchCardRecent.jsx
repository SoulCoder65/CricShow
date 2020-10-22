import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import SpringModal from "./Matchdetail";
import ScoreModel from "./ScoreView";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

const MatchCardRecent = (props) => {
  const [matchid, SetMatchid] = useState([]);
  useEffect(() => {
    fetch(
      `https://cricapi.com/api/cricketScore/?apikey=nHAtnGdDkYSo6hq9AoYE6EHrTuf2&unique_id=${props.data["unique_id"]}`
    )
      .then((res) => res.json())
      .then((data) => {
        SetMatchid(data);
      });
  });
  const [team1, team2] = props.data.title.split("v");

  console.log(team1, team2);
  const classes = useStyles();
  return (
    <>
      <Card className="card">
        <div className="teams">
          <div className="team1">
            <h1>{team1}</h1>
          </div>
          <div className="team2">
            <h1>{team2}</h1>
          </div>
        </div>
        <div className="live">
          <div className="live">
            <ScoreModel title="Score" matchdata={matchid} />
          </div>
        </div>
      </Card>
    </>
  );
};
export default MatchCardRecent;
