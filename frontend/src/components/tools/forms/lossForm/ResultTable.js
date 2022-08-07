import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ResultTable = (props) => {
  const { entries, activity } = props;

  const createData = (name, calories) => {
    return { name, calories };
  };
  const rows = [
    createData("Entrées", entries),
    createData("Dépenses", activity),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="result table">
        <TableHead>
          <TableRow>
            <TableCell>Catégories</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
