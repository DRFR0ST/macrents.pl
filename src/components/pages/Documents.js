import { Typography, withStyles } from '@material-ui/core';

import React from 'react';
import translations from 'translations/documents.trans.js';
import { useLittera } from 'react-littera';

const styles = (theme) => ({
  headerContainer: {
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  headerImage: {
    height: 'auto',
    left: '50%',
    opacity: 0.7,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    zIndex: 2,
  },
  headerShadow: {
    background: `linear-gradient(to top, ${theme.palette.background.main} 10%, transparent)`,
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 3,
  },
  paper: {
    background: theme.palette.background.lighter,
    margin: '2.5% 0',
    maxWidth: '1250px',
    padding: '2rem',
    width: '80%',
  },
  plusChunk: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    bottom: '10%',
    height: '22.5%',
    position: 'absolute',
    right: '7%',
    width: '44%',
    zIndex: 1,
  },
  plusChunk2: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    height: '19%',
    left: '9%',
    position: 'absolute',
    top: '12.5%',
    width: '35.5%',
    zIndex: 1,
  },
  root: {
    '@media (max-width: 1250px)': {
      left: 0,
      margin: '0 auto',
      maxWidth: 'initial',
      padding: '0 5%',
      width: '90%',
    },
    maxWidth: '60vw',
    color: '#fff !important',
    height: 'auto',
    left: '15%',
    padding: '0 0 5% 0',
    position: 'relative',
    top: '-20vh',
    width: '70%',
    zIndex: 5,
  },
});

const Documents = ({ classes }) => {
  const [translated] = useLittera(translations);

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div className={classes.headerShadow} />
        <img
          className={classes.headerImage}
          src={`https://source.unsplash.com/KdeqA3aTnBY/${
            window.innerWidth
          }x${window.innerHeight / 2}`}
          alt="random"
        />
      </div>
      <div className={classes.root}>
        <div className={classes.plusChunk} />
        <div className={classes.plusChunk2} />
        <Typography variant="h3">{translated.documents}</Typography>
        <br />
        <Typography paragraph>
          Esse incididunt qui consectetur cupidatat ullamco anim exercitation
          ullamco velit.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Documents);
