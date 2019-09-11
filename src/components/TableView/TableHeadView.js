import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from "@material-ui/core";

const headCells = [
  { id: "name", numeric: false,label: "Advisors" },
  { id: "status", numeric: true, label: "Status" },
  { id: "language", numeric: false, label: "Language" },
  { id: "reviews", numeric: false, label: "Reviews" },
];

const TableHeadView = ({ 
  order, 
  orderBy, 
  onRequestSort 
}) => {
  const sortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={sortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeadView.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired
};

export default TableHeadView;