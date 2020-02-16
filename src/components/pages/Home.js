import Contact from '../common/Contact';
import Footer from '../common/Footer';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import React from 'react';
import Special from '../common/Special';
import { Icon, Typography, withStyles } from '@material-ui/core';
import vehImage from '../../images/newfleet/audi_q7.png';

const styles = {
  root: {},
};

const Home = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          minHeight: '100vh',
          maxWidth: '100%',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            maxWidth: '50%',
            height: '100vh',
            position: 'relative',
            minWidth: '400px',
          }}
        >
          <div
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography variant="h3" color="primary">
              BRAK PROMOCJI
            </Typography>
            <img
              alt="promotion_veh"
              src={vehImage}
              style={{
                filter: 'brightness(0%) opacity(0.7)',
                marginTop: '2rem',
                maxWidth: '100%',
              }}
            />
          </div>
          <div
            style={{
              zIndex: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent 60%)',
            }}
          ></div>
        </div>
        <div
          style={{
            height: '100vh',
            width: '49%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '400px',
          }}
        >
          <Typography
            style={{ fontWeight: 'bold' }}
            variant="h3"
            align="center"
            color="primary"
          >
            Aktualne promocje
          </Typography>
          <Icon style={{ fontSize: '35vw' }} color="primary">
            money_off
          </Icon>
        </div>
      </div>
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
