import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from "@material-ui/lab/Rating";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import EnhancedTableHead from "./EnhancedTableHead";
import AvatarBoxView from "./AvatarBoxView";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    display: 'flex',
    overflowX: 'hide',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 340,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  chip: {
    textTransform: 'capitalize'
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [advisorRows, setAdvisorRows] = React.useState([]);

  const fetchAdvisors = () => {
    fetch('/api/advisors', { accept: "application/json" })
    .then(respnse => respnse.json())
    .then(res => setAdvisorRows([...res]));
  };

  React.useEffect(() => {
    fetchAdvisors()
  }, []);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(advisorRows, getSorting(order, orderBy))
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
                        <Chip
                          variant="outlined"
                          label={row.status}
                          className={classes.chip}
                        />
                      </TableCell>
                      <TableCell align="left">{row.language}</TableCell>
                      <TableCell align="left"> 
                        <Rating value={row.rating} precision={0.5} readOnly />
                        <Link href="/">
                          {row.reviews} Reviews
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>
  );
}