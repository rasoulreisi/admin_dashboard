import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { MenuLayout } from "./index";
import { blue, blueGrey, grey, lightGreen } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

function LayoutLayout() {
  return (
    <>
      <Grid
        item
        flexGrow={1}
        paddingTop={1}
        position={"fixed"}
        height={60}
        marginLeft={"200px"}
      >
        header
      </Grid>
      <Grid container height={"100%"} alignContent={"flex-start"}>
        <Grid item sx={{ height: "100%", width: 200 }}>
          <MenuLayout />
        </Grid>
        <Grid item marginLeft={1}>
          <Divider orientation={"vertical"} variant={"fullWidth"} />
        </Grid>
        <Grid
          item
          flexGrow={1}
          padding={1}
          margin={2}
          borderRadius={3}
          sx={{ backgroundColor: grey["300"] }}
          marginTop={"60px"}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default LayoutLayout;
