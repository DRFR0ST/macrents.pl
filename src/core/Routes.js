import { Route, Switch } from 'react-router-dom';

import About from 'components/pages/About';
import CarPreview from '../components/common/CarPreview';
import Contact from 'components/pages/Contact';
import ErrorPage from 'components/pages/ErrorPage';
import Fleet from 'components/pages/Fleet';
import Home from 'components/pages/Home';
import Pricing from 'components/pages/Pricing';
import React from 'react';
import { withStyles } from '@material-ui/core';
import Documents from '../components/pages/Documents';

const styles = {
  root: {},
};

const Routes = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/fleet" component={Fleet} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/documents" component={Documents} />
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/vehicle/:id" component={CarPreview} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default withStyles(styles)(Routes);
