import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InvertColorsOffRounded } from "@mui/icons-material";

function MenuLayout() {
  return (
    <List sx={{ height: "100%" }}>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InvertColorsOffRounded />
        </ListItemIcon>
        <ListItemText primary={"فاکتور"} />
      </ListItemButton>
    </List>
  );
}

export default MenuLayout;
