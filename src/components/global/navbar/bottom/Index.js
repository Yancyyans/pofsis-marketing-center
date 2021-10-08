// Libraries
import React from 'react';
import {  Grid, Toolbar, makeStyles } from '@material-ui/core';
import Nav from './components/Nav';
// Custom Style
const styles = makeStyles(theme => ({
    bottomBar: {
        minHeight: '50px',
        maxHeight: '50px',
        overflow: 'hidden',
        background: '#FFFFFF'
    }
}))
const Index = () => {
    const dsg = styles();
    return (
        <>
            <Toolbar variant="dense" disableGutters={true} className={dsg.bottomBar} >
                {/* <Container> */}
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                        <Grid item>
                            <Nav />
                        </Grid>
                    </Grid>
                {/* </Container> */}
            </Toolbar>
        </>
    )
}

export default Index;
