import React from "react";
import {withStyles} from "@material-ui/core";
import { Route, Switch} from "react-router-dom";

import Home from 'components/pages/Home';
import ErrorPage from 'components/pages/ErrorPage';

const styles = {
    root: {
    }
}

const Routes = ({classes}) => {

    return <div className={classes.root}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
}

export default withStyles(styles)(Routes);