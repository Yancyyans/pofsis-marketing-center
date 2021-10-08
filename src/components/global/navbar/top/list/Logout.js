// Libraries
import React, { useState } from 'react';
import { Avatar, Box, IconButton, MenuItem, Popover, Typography } from '@material-ui/core';

const Logout = () => {
    const [ anchorEl, setAnchorEl ] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'pop-over' : undefined

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Box display="flex" alignItems="center">
                <Box>
                    <Typography className="f-17"> Admin </Typography>
                </Box>
                <IconButton onClick={handleOpen}> 
                    <Avatar style={{height: '34px', width: '34px'}} />
                </IconButton>
                 
                {/* <Box bgcolor="#FFFFFF" color="#000" borderRadius="8px" display="flex" alignItems="center" padding="3px" style={{ cursor: 'pointer' }} onClick={handleOpen} >
                    <ArrowDropDownOutlined  />
                </Box> */}
            </Box>
            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}}
            >
                <MenuItem>
                    <Typography>Settings</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography>Logout</Typography>
                </MenuItem>
            </Popover>
        </>
    )
}

export default Logout;
