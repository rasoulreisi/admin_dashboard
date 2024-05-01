import React, {useState} from "react";
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import {AiFillCustomerService} from "react-icons/ai";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import {items, MenuItem} from "../utils/menuItems.util";
import {IconContext} from "react-icons";
import {blue, grey} from "@mui/material/colors";

function MenuLayout() {
    const theme = useTheme();
    return (
        <Box
            border={"black"}
            sx={{
                color: theme.palette.grey["800"]
            }}
        >
            <List sx={{padding: 0}}>
                {items.map(item => <Menu item={item}/>)}
            </List>
        </Box>
    );
}

function Menu({item}: { item: MenuItem }) {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const bgColors = [theme.palette.grey["500"] ,theme.palette.grey["400"], theme.palette.grey["300"]]
    const currentBg = bgColors[item.level - 1];
    return (
        <>
            <ListItemButton sx={{backgroundColor: currentBg ,padding:'2px 4px', '& :hover': {color: blue.A400}}} onClick={() => setOpen(!open)}>

                <ListItemIcon sx={{fontSize: 16, minWidth: 'initial', marginRight: '8px', '& :hover': {color: blue.A400}}} color={theme.palette.text.secondary}>

                        {item.icon}

                </ListItemIcon>
                <ListItemText sx={{fontSize: 12}} disableTypography primary={item.title}/>
                {item.children && item.children.length > 0 && (open ? <MdExpandLess/> : <MdExpandMore/>)}
            </ListItemButton>
            {item.children?.length > 0 && <Collapse in={open} timeout="auto" unmountOnExit>

                {item.children?.length > 0 && item.children.map(subItem => <Menu item={subItem} key={subItem.key}/>)}

            </Collapse>}


        </>
    );
}

export default MenuLayout;
