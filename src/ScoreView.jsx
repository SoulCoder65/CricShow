import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ScoreIcon from "@material-ui/icons/Score";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function ScoreModel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.margin}
        startIcon={<ScoreIcon />}
        onClick={handleOpen}
      >
        {props.title}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Match Details</h2>
            <p id="spring-modal-description">{`Match Stats:- ${
              props.matchdata["stat"] !== undefined
                ? props.matchdata["stat"]
                : "Not Known Yet"
            }`}</p>
            <p id="spring-modal-description">{`Score:- ${
              props.matchdata["score"] !== undefined
                ? props.matchdata["score"]
                : "Not Known Yet"
            }`}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
