// Libraries
import React from 'react';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Assets
import AppLogo from '../../../../../assets/images/main-assets/app-logos/poficon.png';
// Custom Style
const styles = makeStyles(theme => ({
    defaultLogo:{
        borderRadius: '10px'
    }
}))
const Logo = () => {
    const dsg = styles();
    return (
        <>
            <Box display="flex" alignItems="center" >
                <Link to="/">
                    <Avatar className={dsg.defaultLogo}  src={AppLogo} variant="square" alt="logo" />
                </Link>
                <Box marginLeft="5px"> 
                    <Link to="/" style={{textDecoration: 'none', color: '#ffffff'}}>
                        <Typography variant="subtitle1"><b>POF</b>Marketing Center</Typography>
                    </Link>
                </Box>
            </Box>
        </>
    )
}
export default Logo;
