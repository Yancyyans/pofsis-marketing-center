// Libraries
import React from 'react';
import { AppBar } from '@material-ui/core';
// Layouts
import TopBar from './top/Index';
// import BottomBar from './bottom/Index'
const Index = () => {
    return (
        <>
            <AppBar position="fixed">
                <TopBar />
                {/* <BottomBar /> */}
            </AppBar>
        </>
    )
}

export default Index;
