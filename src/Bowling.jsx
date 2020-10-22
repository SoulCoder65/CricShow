import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Bowling(props) {
  function createData(Bowling, ListA, FirstClass, ODI, T20, Test) {
    return { Bowling, ListA, FirstClass, ODI, T20, Test };
  }
  if (
    props.bowling.listA !== undefined ||
    props.bowling.firstClass !== undefined ||
    props.bowling.T20Is !== undefined ||
    props.bowling.tests !== undefined ||
    props.bowling.ODIs !== undefined
  ) {
    // Variables for bowlings
    const bowling = props.bowling;
    const lista = bowling.listA;
    const firstclass = bowling.firstClass;
    const ODI = bowling.ODIs;
    const T20 = bowling.T20Is;
    const Test = bowling.tests;

    var rows = [
      createData(
        "10w",
        lista["10"],
        firstclass["10"],
        ODI["10"],
        T20["10"],
        Test["10"]
      ),
      createData(
        "5w",
        lista["5w"],
        firstclass["5w"],
        ODI["5w"],
        T20["5w"],
        Test["5w"]
      ),
      createData(
        "4w",
        lista["4w"],
        firstclass["4w"],
        ODI["4w"],
        T20["4w"],
        Test["4w"]
      ),
      createData(
        "S.R",
        lista["SR"],
        firstclass["SR"],
        ODI["SR"],
        T20["SR"],
        Test["SR"]
      ),
      createData(
        "Econ.",
        lista["Econ"],
        firstclass["Econ"],
        ODI["Econ"],
        T20["Econ"],
        Test["Econ"]
      ),
      createData(
        "Ave",
        lista["Ave"],
        firstclass["Ave"],
        ODI["Ave"],
        T20["Ave"],
        Test["Ave"]
      ),
      createData(
        "BBM",
        lista["BBM"],
        firstclass["BBM"],
        ODI["BBM"],
        T20["BBM"],
        Test["BBM"]
      ),
      createData(
        "BBI",
        lista["BBI"],
        firstclass["BBI"],
        ODI["BBI"],
        T20["BBI"],
        Test["BBI"]
      ),
      createData(
        "Wickets",
        lista["Wkts"],
        firstclass["Wkts"],
        ODI["Wkts"],
        T20["Wkts"],
        Test["Wkts"]
      ),
      createData(
        "Runs",
        lista["Runs"],
        firstclass["Runs"],
        ODI["Runs"],
        T20["Runs"],
        Test["Runs"]
      ),
      createData(
        "Balls",
        lista["Balls"],
        firstclass["Balls"],
        ODI["Balls"],
        T20["Balls"],
        Test["Balls"]
      ),
      createData(
        "Inn",
        lista["Inns"],
        firstclass["Inns"],
        ODI["Inns"],
        T20["Inns"],
        Test["Inns"]
      ),
      createData(
        "Matches",
        lista["Mat"],
        firstclass["Mat"],
        ODI["Mat"],
        T20["Mat"],
        Test["Mat"]
      ),
    ];
  } else {
    var rows = [
      createData("10w"),
      createData("5w"),
      createData("4w"),
      createData("S.R"),
      createData("Econ."),
      createData("Ave"),
      createData("BBM"),
      createData("BBI"),
      createData("Wickets"),
      createData("Runs"),
      createData("Balls"),
      createData("Inn"),
      createData("Matches"),
    ];
  }

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bowling</StyledTableCell>
            <StyledTableCell align="right">ListA</StyledTableCell>
            <StyledTableCell align="right">First&nbsp;Class</StyledTableCell>
            <StyledTableCell align="right">ODI</StyledTableCell>
            <StyledTableCell align="right">T20</StyledTableCell>
            <StyledTableCell align="right">Test</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Bowling}>
              <StyledTableCell component="th" scope="row">
                {row.Bowling}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ListA}</StyledTableCell>
              <StyledTableCell align="right">{row.FirstClass}</StyledTableCell>
              <StyledTableCell align="right">{row.ODI}</StyledTableCell>
              <StyledTableCell align="right">{row.T20}</StyledTableCell>
              <StyledTableCell align="right">{row.Test}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
