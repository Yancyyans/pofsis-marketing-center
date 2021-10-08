// Libraries
import React, { useContext } from 'react';
import {  List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { HomeRounded, LocalMallRounded, LoyaltyRounded, ViewCarouselRounded, AccountTreeRounded, BusinessRounded  } from '@material-ui/icons';
import { useHistory } from 'react-router';

// Core
import { NavContext } from '../../../../core/context/NavProvider';

const links = [
    { icon: <HomeRounded /> ,  url: '/' , title: 'Home' ,},
    { icon: <LocalMallRounded /> ,  url: '/my-products' , title: 'My Products' ,},
    { icon: <LoyaltyRounded /> ,  url: '/promos' , title: 'Promos' ,},
    { icon: <ViewCarouselRounded /> ,  url: '/templates' , title: 'Templates' ,},
    { icon: <BusinessRounded /> ,  url: '/business-development' , title: 'Business Development' ,},
    { icon: <AccountTreeRounded /> ,  url: 'integration' , title: 'Integration' ,},
]

const useStyles = makeStyles(() => ({
    sidebar: {
        color: '#2196f3'
    }
}))

const NavList = () => {
    const classes = useStyles();
    let nav = useHistory();
    let [ active, setActive ] = useContext(NavContext);
    const redirectTo = ( url ) => {
        nav.push(url);
        setActive(url)
    }
    return (
        <>
                {
                    links.map((link, index) =>  (
                    <List>
                        <ListItem button onClick={e => redirectTo(link.url)} className={active === link.url ? classes.sidebar : ''} >
                            <ListItemIcon style={{color: active === link.url ? '#2196f3' : ''}}> {link.icon} </ListItemIcon>
                            <ListItemText primary={<Typography variant= "body2"> {link.title} </Typography>} />
                        </ListItem>
                    </List>
                    ))
                }
        </>
    )
}

export default NavList;
