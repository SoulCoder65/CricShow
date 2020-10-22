import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SportsHandballRoundedIcon from "@material-ui/icons/SportsHandballRounded";
import "./App.css";
import Bowling from "./Bowling";
import Bio from "./Bio";
async function getUserAsync(pid) {
  let response = await fetch(
    `https://cricapi.com/api/playerStats/?apikey=nHAtnGdDkYSo6hq9AoYE6EHrTuf2&pid=${pid}`
  );
  let data = await response.json();
  return data;
}

export default function Playerstats() {
  const [pid, Setpid] = useState(["35320"]);
  const [playerstats, setplayerstats] = useState([""]);
  const [bowlingstats, setbowlingstats] = useState([""]);
  const [battingstats, setbattingstats] = useState([""]);
  getUserAsync(pid).then((data) => {
    setplayerstats(data);

    setbowlingstats(data.data.bowling);
    setbattingstats(data.data.batting);
  });
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();
  const [value, setValue] = useState();
  const changevalue = () => {
    Setpid(value);
  };
  const textInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SportsHandballRoundedIcon />
          </InputAdornment>
        }
        value={value}
        onChange={textInput}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchRoundedIcon />}
        onClick={changevalue}
      >
        Search
      </Button>
      <div className="playerstats-cont">
        <div className="img-section">
          <img
            src={
              playerstats.imageURL !== undefined
                ? playerstats.imageURL
                : "./images/defaultpic.png"
            }
            alt=""
          />
        </div>
        <Bio
          stats={playerstats}
          bowling={bowlingstats}
          batting={battingstats}
        />
      </div>
    </>
  );
}
