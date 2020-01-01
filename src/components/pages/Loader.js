import React, { useEffect, useState } from 'react';
import { LinearProgress, Portal, makeStyles } from '@material-ui/core';
import logo from 'images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    background: theme.palette.background.main,
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    left: 0,
    transition: 'all 155ms ease',
  },
  container: {
    top: '50%',
    left: '50%',
    position: 'relative',
    maxWidth: '70%',
    transform: 'translate(-50%, -50%)',
  },
  logo: {
    position: 'relative',
    maxWidth: 'auto',
    maxHeight: '200px',
    marginLeft: '50%',
    transform: 'translate(-50%)',
  },
  hidden: {
    opacity: 0,
  },
}));

const LoadingPage = ({ time = 5000 }) => {
  const [shown, setShown] = useState(true);
  const [hidding, setHidding] = useState(false);
  const classes = useStyles();

  const handleTimeout = () => {
    setHidding(true);
    setTimeout(() => {
      setShown(false);
      setHidding(false);
    }, 200);
  };

  useEffect(() => setTimeout(handleTimeout, time), [time]);

  if (!shown) return null;

  return (
    <Portal>
      <div className={`${classes.root} ${hidding ? classes.hidden : ''}`}>
        <div className={classes.container}>
          <img className={classes.logo} src={logo} alt="Logo" />
          <br /> <br /> <br />
          <LinearProgress />
        </div>
      </div>
    </Portal>
  );
};

export default LoadingPage;
