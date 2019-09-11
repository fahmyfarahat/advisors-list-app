import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { 
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Link,
  LinearProgress
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { tableSort, getSorting, tableFilter } from "../../utilities";
import TableToolbarView from "./TableToolbarView";
import TableHeadView from "./TableHeadView";
import AvatarBoxView from "../AvatarBoxView/AvatarBoxView";

const TableListView = ({ loading, advisorData, classes }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [advisorRows, setAdvisorRows] = useState([]);
  const [filters, setFilters] = React.useState({
    status: {
      online: false,
      offline: false
    },
    language: {
      german: false,
      english: false,
      spanish: false,
      italian: false
    }
  });
  
  useEffect(() => {
    setAdvisorRows([...advisorData]);
  }, [advisorData]);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };
  
  const handleChange = (key, supKey) => event => {
    setFilters({
      ...filters, 
      [key] : {
        ...filters[key],
        [supKey]: event.target.checked
      }
    });
  };

  return (
    <Paper className={classes.paper}>
      <TableToolbarView 
        filters={filters} 
        onChange={handleChange}
      />
      <div className={classes.tableWrapper}>
        <Table
          className={classes.table}
          size="medium"
        >
          <TableHeadView
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {tableSort(tableFilter(advisorRows, filters), getSorting(order, orderBy))
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    key={row.name}
                  >
                    <TableCell component="th">
                      <AvatarBoxView status={row.status} src={row.avatar} name={row.name} />
                    </TableCell>
                    <TableCell align="right">
                      <span className={classes.status}>{row.status}</span>
                    </TableCell>
                    <TableCell align="left">{row.language}</TableCell>
                    <TableCell align="left"> 
                      <Rating value={row.rating} precision={0.5} readOnly />
                      <Link>
                        {row.reviews} Reviews
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        { loading && (<LinearProgress />)}
      </div>
      {!advisorRows.length && !loading && null}
    </Paper>
  );
};

TableListView.propTypes = {
  loading: PropTypes.bool.isRequired, 
  advisorData: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default TableListView;