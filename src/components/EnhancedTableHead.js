import React from 'react';
import PropTypes from 'prop-types';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core';

//TODO:: move to constants.js
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Advisors' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'language', numeric: false, disablePadding: false, label: 'Language' },
  { id: 'reviews', numeric: false, disablePadding: false, label: 'Reviews' },
];

const EnhancedTableHead = ({ 
  order, 
  orderBy, 
  onRequestSort 
}) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
};

export default EnhancedTableHead;