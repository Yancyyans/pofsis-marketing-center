// Libraries
import React from 'react';
import { Grid, Toolbar, makeStyles } from '@material-ui/core';
// Layouts
import Logo from './list/Logo';
import Connection from './list/Connection';
import Logout from './list/Logout';
const styles = makeStyles(theme => ({
    topBar:{
        minHeight: '60px',
        maxHeight: '60px',
        overflow: 'hidden',
        padding: '0px 20px 0px 20px'
    }
}))
const Index = () => {
    const dsg = styles();
    return (
        <>
            <Toolbar variant="dense" disableGutters={ true } className={dsg.topBar} >
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                        <Grid item>
                            <Logo />
                        </Grid>
                        <Grid item>
                            <Connection />
                        </Grid>
                        <Grid item>
                            <Logout />
                        </Grid>
                    </Grid>
            </Toolbar>
        </>
    )
}

export default Index;
