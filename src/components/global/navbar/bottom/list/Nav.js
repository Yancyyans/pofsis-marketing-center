// Libraries
import React, { useContext } from 'react';
import { Box, IconButton, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
// Core
import { NavContext } from '../../../../../core/context/NavProvider';
// Assets
import HomeIcon from '../../../../../assets/images/main-assets/icons/home.png';
import Task from '../../../../../assets/images/main-assets/icons/task.png';
import Profile from '../../../../../assets/images/main-assets/icons/profile.png';
import BuyTools from '../../../../../assets/images/main-assets/icons/buy_tools.png';
import Notification from '../../../../../assets/images/main-assets/icons/notification.png';

import ActiveHomeIcon from '../../../../../assets/images/main-assets/icons/active_home.png';
import ActiveTask from '../../../../../assets/images/main-assets/icons/active_task.png';
import ActiveProfile from '../../../../../assets/images/main-assets/icons/active_profile.png';
import ActiveBuyTools from '../../../../../assets/images/main-assets/icons/active_buy_tools.png';

const links = [
    { icon: Notification, url: '/notification', title: 'Notification', activeIcon: Notification, },
    { icon: BuyTools, url: '/buytools', title: 'Buy Tools', activeIcon: ActiveBuyTools, },
    { icon: Task, url: '/task', title: 'Task', activeIcon: ActiveTask, },
    { icon: HomeIcon, url: '/', title: 'Home', activeIcon: ActiveHomeIcon  },
    { icon: Profile, url: '/profile', title: 'Profile', activeIcon: ActiveProfile  },
]

const styles = makeStyles(() => ({
    navTitle: {
        color: 'green'
    }
}))
const Nav = () => {
    const dsg = styles();
    let nav = useHistory();
    let [ active, setActive ] = useContext(NavContext);
    const redirectTo = ( url ) => {
        nav.push(url);
        setActive(url);
    }
    return (
        <>
            <Box display="flex" alignItems="center" >
                {
                    links.map((link, index) => (
                        <Box key={index} marginLeft="10px">
                            <IconButton onClick={ e=> redirectTo(link.url) } >
                                <img src={ active === link.url ? link.activeIcon : link.icon } alt="Icon" />
                                <Typography className={active === link.url ? dsg.navTitle : ''} >{link.title}</Typography>
                            </IconButton>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default Nav;
