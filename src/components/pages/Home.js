import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Header from '../common/Header'
import Special from '../common/Special'
import Footer from '../common/Footer'
import Contact from '../common/Contact'

const styles = {
  root: {},
}

const Home = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Special />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node,
}

export default withStyles(styles)(Home)
