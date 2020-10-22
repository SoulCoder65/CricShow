import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import SpringModal from "./Matchdetail";

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

const MatchCardUpcoming = (props) => {
  const [team1, team2, venue, type] = props.data.name
    .split("v")
    .join(",")
    .split("at")
    .join(",")
    .split(",");
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
          <SpringModal
            title="Show Detail"
            venue={venue}
            type={type}
            date={props.data.date}
          />
        </div>
      </Card>
    </>
  );
};
export default MatchCardUpcoming;
