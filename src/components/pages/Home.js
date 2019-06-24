import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Header from '../common/Header'
import Special from '../common/Special'
import ContactPanel from '../common/ContactPanel'
import Footer from '../common/Footer'

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
      <ContactPanel />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node,
}

export default withStyles(styles)(Home)
