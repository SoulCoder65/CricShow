import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Batting from "./Batting";
import Bowling from "./Bowling";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(Bio, Stats) {
  return { Bio, Stats };
}

export default function (props) {
  const values = props.stats;
  const classes = useStyles();
  const rows = [
    createData("Name", props.stats.fullName),
    createData("Batting Style", props.stats.battingStyle),
    createData("Bowling Style", props.stats.bowlingStyle),
    createData("Teams", props.stats.majorTeams),
    createData("Age", props.stats.currentAge),
    createData("D.O.B", props.stats.born),
    createData("Country", props.stats.country),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Bio</StyledTableCell>
              <StyledTableCell align="right">Stats&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.Bio}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Stats}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Bowling bowling={props.bowling} />
      <Batting batting={props.batting} />
    </>
  );
}
