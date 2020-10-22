import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

export default function Batting(props) {
  function createData(Batting, ListA, FirstClass, ODI, T20, Test) {
    return { Batting, ListA, FirstClass, ODI, T20, Test };
  }
  if (
    props.batting.listA !== undefined ||
    props.batting.firstClass !== undefined ||
    props.batting.T20Is !== undefined
  ) {
    // Batting Variables
    const batting = props.batting;
    const lista = batting.listA;
    const firstclass = batting.firstClass;
    const ODI = batting.ODIs;
    const T20 = batting.T20Is;
    const Test = batting.tests;

    var rows = [
      createData(
        "4s",
        lista["4s6s"],
        firstclass["4s"],
        ODI["4s"],
        T20["4s"],
        Test["4s"]
      ),
      createData(
        "6s",
        lista["6s"],
        firstclass["6s"],
        ODI["6s"],
        T20["6s"],
        Test["6s"]
      ),
      createData(
        "50",
        lista["50"],
        firstclass["50"],
        ODI["50"],
        T20["50"],
        Test["50"]
      ),
      createData(
        "100",
        lista["100"],
        firstclass["100"],
        ODI["100"],
        T20["100"],
        Test["100"]
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
        "BF",
        lista["BF"],
        firstclass["BF"],
        ODI["BF"],
        T20["BF"],
        Test["BF"]
      ),
      createData(
        "Ct",
        lista["Ct"],
        firstclass["Ct"],
        ODI["Ct"],
        T20["Ct"],
        Test["Ct"]
      ),
      createData(
        "HS",
        lista["HS"],
        firstclass["HS"],
        ODI["HS"],
        T20["HS"],
        Test["HS"]
      ),
      createData(
        "Inns",
        lista["Inns"],
        firstclass["Inns"],
        ODI["Inns"],
        T20["Inns"],
        Test["Inns"]
      ),
      createData(
        "Mat",
        lista["Mat"],
        firstclass["Mat"],
        ODI["Mat"],
        T20["Mat"],
        Test["Mat"]
      ),
      createData(
        "NO",
        lista["NO"],
        firstclass["NO"],
        ODI["NO"],
        T20["NO"],
        Test["NO"]
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
        "SR",
        lista["SR"],
        firstclass["SR"],
        ODI["SR"],
        T20["SR"],
        Test["SR"]
      ),
      createData(
        "St",
        lista["St"],
        firstclass["St"],
        ODI["St"],
        T20["St"],
        Test["St"]
      ),
    ];
  } else {
    var rows = [
      createData("4s"),
      createData("6s"),
      createData("50"),
      createData("100"),
      createData("Ave"),
      createData("BF"),
      createData("Ct"),
      createData("HS"),
      createData("Inns"),
      createData("Mat"),
      createData("NO"),
      createData("Runs"),
      createData("SR"),
      createData("St"),
    ];
  }

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Batting</StyledTableCell>
            <StyledTableCell align="right">ListA</StyledTableCell>
            <StyledTableCell align="right">First&nbsp;Class</StyledTableCell>
            <StyledTableCell align="right">ODI</StyledTableCell>
            <StyledTableCell align="right">T20</StyledTableCell>
            <StyledTableCell align="right">Test</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Batting}>
              <StyledTableCell component="th" scope="row">
                {row.Batting}
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
