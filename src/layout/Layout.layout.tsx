import React from "react";
import { Box, Grid, List, ListItem } from "@mui/material";
import { MenuLayout } from "./index";

function LayoutLayout() {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item sx={{ width: 200, height: "100%" }}>
        <MenuLayout />
      </Grid>
    </Grid>
  );
}

export default LayoutLayout;
