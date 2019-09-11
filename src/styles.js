import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
  status: {
    textTransform: 'capitalize'
  }
}));

export const useToolbarStyles = makeStyles(theme => ({
  spacer: {
    flex: "1 1 100%",
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: "0 0 auto",
  },
  list: {
    width: 250,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    width: 200,
    margin: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
  }
}));
