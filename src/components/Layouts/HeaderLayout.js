import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const HeaderLayout = () => (
  <AppBar position="relative">
  <Toolbar>
    <Typography variant="h6" color="inherit" noWrap>
      Advisors layout
    </Typography>
  </Toolbar>
</AppBar>
);

export default HeaderLayout;
