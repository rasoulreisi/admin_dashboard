import React, { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { AiFillCustomerService } from "react-icons/ai";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

function MenuLayout() {
  const theme = useTheme();
  return (
    <Box
      border={"black"}
      sx={{
        backgroundColor: "primary.main",
        color: theme.palette.text.secondary,
      }}
    >
      <List>
        <SubMenu />
        <SubMenu />
      </List>
    </Box>
  );
}

function SubMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <AiFillCustomerService color={theme.palette.text.secondary} />
        </ListItemIcon>
        <ListItemText primary="مشتری" />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton>
          <ListItemIcon />
          <ListItemText primary="لیست" />
        </ListItemButton>
      </Collapse>
    </>
  );
}

export default MenuLayout;
