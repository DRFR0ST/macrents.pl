import { Button, withStyles } from '@material-ui/core';

import React from 'react';
import translations from 'translations/special.trans.js';
import { useLittera } from 'react-littera';

const styles = (theme) => ({
  imageLeft: {
    height: 'auto',
    minWidth: '100%',
    position: 'absolute',
    right: 0,
    top: '85%',
    transform: 'translateY(-85%)',
    zIndex: -1,
  },
  imageRight: {
    height: 'auto',
    left: 0,
    minWidth: '100%',
    position: 'absolute',
    top: '75%',
    transform: 'translateY(-75%)',
    zIndex: -1,
  },
  imageRight2: {
    height: 'auto',
    left: 0,
    minWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: -1,
  },
  rootLeft: {
    alignItems: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'flex-end',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
  },
  rootRight: {
    alignItems: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'flex-start',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
  },
  shadowLeft: {
    background: 'linear-gradient(to bottom left, #121212d9 35%, transparent)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  shadowRight: {
    background: 'linear-gradient(to bottom right, #121212d9 35%, transparent)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  sloganLeft: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    opacity: 0.8,
    padding: '0 10%',
    textAlign: 'left',
    width: '50%',
    zIndex: 1,
  },
  sloganRight: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    opacity: 0.8,
    padding: '0 10%',
    textAlign: 'left',
    width: '50%',
    zIndex: 1,
  },
});

const Special = ({ classes }) => {
  const [translated] = useLittera(translations);

  return (
    <div>
      <div className={classes.rootRight}>
        <div className={classes.sloganRight}>
          <div>
            <h2>{translated.slogan1}</h2>
            <Button size="large" variant="contained" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          className={classes.imageRight}
          alt="rightpic"
        />
      </div>
      <div className={classes.rootLeft}>
        <div className={classes.shadowLeft} />
        <img
          src="https://source.unsplash.com/ZhEnFcHO0es"
          className={classes.imageLeft}
          alt="centerpic"
        />
        <div className={classes.sloganLeft}>
          <div>
            <h2>{translated.slogan2}</h2>
            <Button
              size="large"
              style={{ float: 'right' }}
              variant="contained"
              color="primary"
            >
              {translated.learnMore}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rootRight}>
        <div className={classes.sloganRight}>
          <div>
            <h2>{translated.slogan3}</h2>
            <Button size="large" variant="contained" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://source.unsplash.com/cTmL8HxP8NQ/"
          className={classes.imageRight2}
          alt="rightpic2"
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Special);
