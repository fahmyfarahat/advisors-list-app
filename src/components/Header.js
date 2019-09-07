import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar position="relative">
  <Toolbar>
    <Typography variant="h6" color="inherit" noWrap>
      Advisors layout
    </Typography>
  </Toolbar>
</AppBar>
);

export default Header;
