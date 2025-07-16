import { useEffect, useState } from "react";
import { Button, List, ListItem, SwipeableDrawer, TextField } from "@mui/material";
import './SettingsMenu.css';


export default function SettingsMenu() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = 
    (event: React.MouseEvent) => {
        if (event.type === 'click') {
            setOpen(!open);
        }
    }

    const controlsList =
    (
        <div className={"menu"}>
            <p>
                ECA Settings Menu
            </p>
            <List className={"controls_list"}>
                <ListItem>
                    <TextField fullWidth className={"control"} id="outlined-basic" label="ECA #" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField fullWidth className={"control"} id="outlined-basic" label="Grid Width" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField fullWidth className={"control"} id="outlined-basic" label="Grid Height" variant="outlined" />
                </ListItem>
                <ListItem>
                    <TextField fullWidth className={"control"} id="outlined-basic" label="Initial Condition (Little-Endian #)" variant="outlined" />
                </ListItem>
                <ListItem>
                    <Button fullWidth className={"control"} onClick={toggleDrawer}>Apply</Button>
                </ListItem>
            </List>
        </div>
    )

    return (
    <div className={"container"}>
        <Button onClick={toggleDrawer}>Menu</Button>
        <SwipeableDrawer
            anchor="top"
            open={open} 
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
        >
            {controlsList}
        </SwipeableDrawer>
    </div>
    );
}