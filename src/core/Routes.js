import React from 'react'
import { withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Fleet from 'components/pages/Fleet'
import Contact from 'components/pages/Contact'
import Pricing from 'components/pages/Pricing'
import ErrorPage from 'components/pages/ErrorPage'

const styles = {
  root: {},
}

const Routes = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/fleet" component={Fleet} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pricing" component={Pricing} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default withStyles(styles)(Routes)
