// Libraries
import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Connection = () => {
    return (
        <>
            <Box display="flex" alignItems="center" >
                <Link to="/paymeshare"  style={{textDecoration: "none", color:"#FFFFFF"}}>
                    <Typography variant="subtitle1"> PayMeShare </Typography>
                </Link>
                <Box padding="5px">
                    <Divider orientation="vertical" variant="middle" style={{backgroundColor: '#FFFFFF', height: '20px', width: '1px'}} />
                </Box>
                <Link to="/marketplace"  style={{textDecoration: "none" , color:"#FFFFFF"}}>
                    <Typography variant="subtitle1"> MarketPlace </Typography>
                </Link>
            </Box>
        </>
    )
}

export default Connection;
