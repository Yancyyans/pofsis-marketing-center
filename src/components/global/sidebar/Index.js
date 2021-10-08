// Libraries
import React, { useState } from 'react';
import { Drawer, Box, IconButton, makeStyles, Divider} from '@material-ui/core';
import { ChevronLeft, Menu } from '@material-ui/icons';
import clsx from 'clsx';
import Nav from './list/Nav';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        top: '60px',
        width: drawerWidth,
        border: '1px solid white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose:{
        top: '60px',
        border: '1px solid white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: '60px'
        },
    }

}))

const drawerWidth = 250;

const Index = () => {
    const dsg = useStyles();
    const [ open, setOpen ] = useState(false);

    const drawerToggle = () => {
        setOpen(!open);
    }
    return (
        <>
            <Drawer variant="permanent" className={clsx(dsg.drawer, {
                [dsg.drawerOpen]: open, [dsg.drawerClose]: !open,
            })} classes={{
                paper: clsx({
                    [dsg.drawerOpen]: open, [dsg.drawerClose]: !open,
                })
            }}
            >
                <Box display="flex" alignItems="center" justifyContent="space-between" minHeight="64px" marginLeft="5px">
                    {open ? <Box ml={2.1} className="f-18"> <b> Menu </b> </Box> : '' } 
                    <IconButton onClick={drawerToggle}>
                        {open ? <ChevronLeft /> : <Menu /> }
                    </IconButton>
                </Box>
                <Divider />
                <Nav />
            </Drawer>
        </>
    )
}

export default Index;
