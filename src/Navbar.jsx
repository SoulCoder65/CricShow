import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
// Menu icons
import SportsCricketOutlinedIcon from "@material-ui/icons/SportsCricketOutlined";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ContactsIcon from "@material-ui/icons/Contacts";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FiberSmartRecordIcon from "@material-ui/icons/FiberSmartRecord";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    secondary: {
      main: "#fff",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#76ff03",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div id="navcss" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <SportsCricketOutlinedIcon /> Cric Show
          </Typography>
          <NavLink activeClassName="activeClass" to="/">
            <Button color="secondary">
              <ContactsIcon /> Home
            </Button>
          </NavLink>

          <NavLink activeClassName="activeClass" to="/upcoming">
            <Button color="secondary">
              <LiveTvIcon /> Upcoming Matches
            </Button>
          </NavLink>
          <NavLink activeClassName="activeClass" to="/recent">
            <Button color="secondary">
              <FiberSmartRecordIcon /> Recent Matches
            </Button>
          </NavLink>
          <NavLink activeClassName="activeClass" to="/playerstats">
            <Button color="secondary">
              <EqualizerIcon /> Player Stats
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Navbar };
