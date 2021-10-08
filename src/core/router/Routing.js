// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Layouts
import Home from '../../components/home/Index';
const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render= {props => (<Home {...props} />) } />
            </Switch>
        </>
    )
}

export default Routing;
