import React from 'react';
import { Typography } from '@material-ui/core';
import translations from 'translations/footer.trans.js';
import { useLittera } from 'react-littera';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  '@media (max-width: 767px)': {
    container: {
      alignContent: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  container: {
    '& p': {
      margin: 0,
    },
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    padding: '0 5vw',
  },
  links: {
    '& p': {
      '&:hover': {
        opacity: 1,
      },
      cursor: 'pointer',
      opacity: 0.8,
      padding: '0 5px',
      textDecoration: 'underline',
      transition: 'opacity 255ms ease',
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  root: {
    color: '#fff',
    height: '64px',
    position: 'relative',
    width: '100%',
  },
});

const Footer = ({ classes }) => {
  const [translated] = useLittera(translations);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography paragraph>Copyright (c) 2019, VMRents.pl</Typography>
        <div className={classes.links}>
          <Typography paragraph>{translated.privacyPolicy}</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
