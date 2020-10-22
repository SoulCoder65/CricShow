import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SpringModal from "./Matchdetail";
import ScoreModel from "./ScoreView";
// API KEY
const api_key = process.env.React_APP_CRIC_API;

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

const MatchCard = (props) => {
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

  const classes = useStyles();
  return (
    <>
      <Card className="card">
        <div className="teams">
          <div className="team1">
            <h1>{props.data["team-1"]}</h1>
          </div>
          <div className="team2">
            <h1>{props.data["team-2"]}</h1>
          </div>
        </div>
        <div className="live">
          <ScoreModel title="Score" matchdata={matchid} />
          <SpringModal title="View Detail" matchdata={props} />
        </div>
      </Card>
    </>
  );
};
export default MatchCard;
