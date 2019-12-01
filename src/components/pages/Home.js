import Contact from '../common/Contact';
import Footer from '../common/Footer';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import React from 'react';
import Special from '../common/Special';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {},
};

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
  );
};

Home.propTypes = {
  children: PropTypes.node,
};

export default withStyles(styles)(Home);
