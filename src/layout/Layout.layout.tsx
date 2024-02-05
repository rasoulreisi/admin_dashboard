import React from "react";
import { Grid } from "@mui/material";
import { MenuLayout } from "./index";

function LayoutLayout() {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item sx={{ height: "100%", width: 200 }}>
        <MenuLayout />
      </Grid>
    </Grid>
  );
}

export default LayoutLayout;
