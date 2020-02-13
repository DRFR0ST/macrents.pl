import Contact from '../common/Contact';
import Footer from '../common/Footer';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import React from 'react';
import Special from '../common/Special';
import { Icon, Typography, withStyles } from '@material-ui/core';
import FleetSelector from '../common/FleetSelector';

const styles = {
  root: {},
};

const Home = ({ children, classes }) => {
  // TODO: FLOTY!!
  return (
    <div className={classes.root}>
      <Header />
      {/* 
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          maxHeight: '100vh',
          maxWidth: '90%',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '45%' }}>
          <Typography
            style={{ fontWeight: 'bold' }}
            variant="h3"
            align="center"
            color="primary"
          >
            Okazy floty
          </Typography>
          <FleetSelector maxItems={3} />
        </div>
        <div style={{ maxWidth: '45%' }}>
          <Icon
            name="percentage"
            style={{ fontSize: '45vw' }}
            color="primary"
          />
        </div>
      </div> */}
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
