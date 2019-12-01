import { Typography, withStyles } from '@material-ui/core';

import React from 'react';
import translations from 'translations/about.trans.js';
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

const About = ({ classes }) => {
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
        <Typography variant="h3">{translated.about}</Typography>
        <br />
        <Typography paragraphy>
          Esse incididunt qui consectetur cupidatat ullamco anim exercitation
          ullamco velit.
        </Typography>
        <br />
        <Typography paragraph>
          Aute ea eiusmod nulla velit cillum sunt nisi ea veniam quis voluptate
          laborum nulla. Ex cillum tempor non est adipisicing. Veniam Lorem ad
          sunt eiusmod aliqua ipsum irure duis sunt irure incididunt duis esse
          nulla. Quis occaecat laboris do nulla aliqua cillum.
        </Typography>
        <Typography paragraph>
          In enim amet deserunt fugiat laborum nostrud exercitation deserunt
          sint voluptate ad. Ea aliqua tempor exercitation reprehenderit
          excepteur fugiat fugiat anim pariatur. Velit voluptate deserunt veniam
          duis ex reprehenderit. Ut eiusmod ullamco excepteur culpa. Id aliquip
          et magna tempor reprehenderit ex ad deserunt. Ex ut dolore culpa
          officia enim cillum reprehenderit aliqua id dolor fugiat. Ipsum
          exercitation est quis reprehenderit incididunt qui aliquip nulla ut.
        </Typography>
        <Typography paragraph>
          Minim ipsum voluptate commodo aute est aliqua nostrud et est officia
          exercitation qui sint adipisicing.
        </Typography>
        <Typography paragraph>
          Aute consequat est labore ad cillum tempor consequat reprehenderit
          occaecat nostrud irure.
        </Typography>
        <Typography paragraph>
          Laborum mollit voluptate magna anim cillum incididunt reprehenderit
          nisi ea culpa. Reprehenderit Lorem consequat tempor aute commodo
          eiusmod minim amet quis proident quis. Velit quis velit nulla Lorem
          magna ad eu laborum. Labore officia officia ipsum officia consectetur
          elit ea cillum anim. Ex nulla cillum proident Lorem aute laboris. Amet
          sint tempor ad aliquip in aute excepteur occaecat proident culpa do.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
