import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Toolbar,
  Tooltip,
  IconButton,
  Drawer,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useToolbarStyles } from "../../styles";

const TableToolbarView = ({ onChange, filters }) => {
  const classes = useToolbarStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Advisor list
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip onClick={toggleDrawer()} title="Filter list">
          <IconButton  aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer()}>
          <div
            className={classes.list}
            role="presentation"
          >
            {Object.keys(filters).map(filterType => (
              <FormControl key={filterType} component="fieldset" className={classes.formControl}>
                 <FormLabel component="legend">{filterType}</FormLabel>
                 <FormGroup>
                   {Object.keys(filters[filterType]).map(option => (
                    <FormControlLabel
                      key={option}
                      control={<Checkbox checked={filters[filterType][option]} color="primary"
                      onChange={onChange(filterType, option)} value={option} />}
                      label={option}
                    />
                   ))}
                 </FormGroup>
              </FormControl>
            ))}
            <Button
              variant="contained"
              className={classes.button}
              onClick={toggleDrawer()}
            >close</Button>
          </div>
        </Drawer>
      </div>
    </Toolbar>
  );
};

TableToolbarView.propTypes = {
  onChange: PropTypes.func.isRequired, 
  filters: PropTypes.object.isRequired
};

export default TableToolbarView;