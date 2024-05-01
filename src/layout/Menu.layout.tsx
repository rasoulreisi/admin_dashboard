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
import {blue, grey, lightBlue} from "@mui/material/colors";

function MenuLayout() {
    const theme = useTheme();
    return (
        <Box
            border={"black"}
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
    const backTheme = lightBlue;
    const bgColors = [backTheme["500"], backTheme["300"], backTheme["100"]]
    const currentBg = bgColors[item.level - 1];
    return (
        <>
            <ListItemButton sx={{backgroundColor: currentBg, borderRadius: 1, marginBottom: .5, padding: '2px 4px', '&:hover': { backgroundColor: currentBg, fontStyle: 'normal', fontWeight: 'bold'}}}
                            onClick={() => setOpen(!open)}>

                <ListItemIcon
                    sx={{fontSize: 16, minWidth: 'initial', marginRight: '8px', '& :hover': {color: blue.A400}}}
                    color={theme.palette.text.secondary}>

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
