import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Toolbar,
  Tooltip,
  IconButton
} from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles();

  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Advisors
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;