import React from "react";
import { Box, Grid } from "@mui/material";
import { MenuLayout } from "./index";
import { blue, blueGrey, grey, lightGreen } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

function LayoutLayout() {
  return (
    <Box padding={0.75}>
      <Grid boxShadow={1} sx={{ height: 40 }} borderRadius={1} marginBottom={1}>
        header
      </Grid>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sx={{ height: "100%", width: 200 }}>
          <MenuLayout />
        </Grid>
        <Grid item flexGrow={1} sx={{ height: "100%" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LayoutLayout;
