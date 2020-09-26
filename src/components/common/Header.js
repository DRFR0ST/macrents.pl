import { Button, Icon, Typography, withStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';
import cx from 'classnames';
import header_car from 'images/header_car4.png';
import header_background from 'images/header_background.jpg';
import translations from 'translations/header.trans.js';
import { useLittera } from 'react-littera';

const styles = (theme) => ({
  '@media (max-width: 700px)': {
    left: {
      maxWidth: '100% !important',
      width: '100vw !important',
    },
    right: {
      display: 'none',
    },
  },
  content: {
    '& img': {
      height: 'inherit',
    },
    height: 'inherit',
    maxWidth: '50%',
    overflow: 'hidden',
    width: '50vw',
  },
  headerImage: {
    userDrag: 'none',
    userSelect: 'none',
    zIndex: 3,
    maxHeight: '560px',
    margin: '100px 0 auto 10%',
    position: "relative",
  },
  headerImageBackground: {
    position: "absolute",
    width: "40vw",
    height: "100%",
    right: 0,
    top: 0,
    zIndex: -2,
    borderRadius: "300px 0 0 180px",
  },
  left: {
    '& div': {
      '& h3': {
        borderBottom: '10px solid ' + theme.palette.primary.main,
        display: 'inline-block',
        fontWeight: 'bold',
        marginBottom: '5px',

        /*textDecoration: 'underline',
        textDecorationColor: theme.palette.primary.main,*/
        textDecoration: 'none',
        textTransform: 'uppercase',
      },
      '& p': {
        fontWeight: 'light',
        opacity: 0.8,
        //textTransform: 'lowercase',
      },
      maxWidth: '70%',
      padding: '1.5rem',
      zIndex: 3,
    },
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  // plusChunk: {
  //   background: 'transparent',
  //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  //   bottom: '38%',
  //   height: '15%',
  //   position: 'absolute',
  //   right: '8%',
  //   width: '40%',
  //   zIndex: -1,
  // },
  plusChunk2: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    height: '30%',
    left: '20%',
    position: 'absolute',
    top: '14%',
    width: '100%',
    zIndex: -1,
  },
  right: {
    position: 'relative !important',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    height: 'calc(100vh - 64px)',
    justifyContent: 'space-around',
    position: 'relative',
    width: '100%',
  },
});

// const LinkWrapper = ({ ...props }) => <Link {...props} />

const Header = ({ classes }) => {
  const [translated] = useLittera(translations);

  return (
    <div className={classes.root}>
      <div className={cx(classes.content, classes.left)}>
        <div>
          <Typography variant="h3">{translated.title}</Typography>
          <Typography>{translated.description}</Typography>
          <br />
          <Button
            component={Link}
            size="large"
            to="/fleet"
            color="primary"
            variant="outlined"
          >
            {translated.proceed}{' '}
            <Icon size="small" className={classes.rightIcon}>
              directions_car
            </Icon>
          </Button>
        </div>
        <div className={classes.plusChunk} />
      </div>

      <div className={cx(classes.content, classes.right)}>
        <img
          className={classes.headerImage}
          src={header_car}
          alt="Header Car"
        />
        <div className={classes.plusChunk2} />
        {/* <img
          className={classes.headerImageBackground}
          src={header_background}
          alt="Header Background View"
        /> */}
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
