import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Hidden,
  Icon,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { useMemo, useState } from 'react';

import Payment from './Payment.js';
import fleet from '../../api/fleet.js';
import translations from 'translations/fleet.trans.js';
import { useHistory } from 'react-router-dom';
import { useLittera } from 'react-littera';

const styles = {
  '@keyframes vanish': {
    '0%': {
      opacity: 0,
      top: '250px',
    },
    '100%': {
      opacity: 1,
      top: '0px',
    },
    '60%': {
      opacity: 0,
    },
  },
  '@media (max-width: 768px)': {
    arrows: {
      flex: '1 1',
      order: 2,
    },
    container: {
      //height: '250px',
      width: '100vw',
    },
    controls: {
      '& h1': {
        flexBasis: '100%',
        minWidth: 'initial',
        order: 1,
      },
      flexDirection: 'column',
    },
    vehicle: {
      height: 'auto',
      maxHeight: 'initial',
      width: '100%',
    },
  },
  arrows: {
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      opacity: 1,
    },
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 40,
    color: '#fff',
    cursor: 'pointer',
    fontSize: '30px',
    opacity: 0.8,
    padding: 10,
    top: '45%',
    transition: 'all 450ms ease',
  },
  buttonContainer: {
    '& button': {
      margin: '0 10px',
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '400px',
    justifyContent: 'center',
    width: '80vw',
  },
  controls: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '75%',
  },
  controlsText: {
    '& h1': {
      margin: 0,
      minWidth: '50%',
    },
  },
  root: {
    alignContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(to top, rgba(255, 255, 255, 0.6), transparent 55%)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    minHeight: 'calc(100vh - 64px)',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    width: '100vw',
  },
  vehicle: {
    animationDirection: 'alternate',
    animationDuration: '455ms',
    animationName: '$vanish',
    animationTimingFunction: 'ease-in-out',
    maxHeight: '275px',
    position: 'relative',
    height: 'auto',
    maxWidth: '100%',
  },
  vehicleBox: {
    maxHeight: '275px',
    minHeight: '275px',
    position: 'relative',
    height: 'auto',
    maxWidth: '100%',
  },
  vehicleHidden: {
    height: '275px',
    minWidth: '80vw',
    opacity: 0,
    position: 'relative',
    width: 'auto',
  },
};

const FleetSelector = ({ classes, maxItems = 0 }) => {
  const history = useHistory();
  const [active, setActive] = useState(0);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [translated] = useLittera(translations);
  const [rentOpen, setRentOpen] = useState(false);

  const closeRent = () => setRentOpen(false);
  const openRent = () => setRentOpen(true);

  const _flt = useMemo(() => {
    let f = [...fleet];
    if (maxItems > 0) {
      f = f.reverse();
      f.length = maxItems;
    }

    return f;
  }, [maxItems]);

  const handleNext = () =>
    setActive(_flt.length - 1 === active ? 0 : active + 1);
  const handlePrev = () =>
    setActive(0 === active ? _flt.length - 1 : active - 1);

  const closeSpecs = () => setSpecsOpen(false);
  const openSpecs = () => history.push('/vehicle/' + active);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <div className={classes.container}>
            {_flt.map((e, i) => (
              <VehicleItem
                key={JSON.stringify(e)}
                className={classes.vehicle}
                classNameHidden={classes.vehicleHidden}
                vehicle={e}
                active={active === i}
              />
            ))}
          </div>
          <div className={classes.controls}>
            <Hidden smDown>
              <Icon className={classes.arrows} onClick={handlePrev}>
                keyboard_arrow_left
              </Icon>
              <div className={classes.controlsText}>
                <h1>{_flt[active].name}</h1>
                <Typography style={{ opacity: 0.85 }}>
                  {_flt[active].type}
                </Typography>
                <Typography style={{ opacity: 0.6 }} paragraph>
                  {translated.from} {_flt[active].lowestPrice} {translated.aDay}
                </Typography>
              </div>
              <Icon className={classes.arrows} onClick={handleNext}>
                keyboard_arrow_right
              </Icon>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.controlsText}>
                <h1>{_flt[active].name}</h1>
                <Typography style={{ opacity: 0.6 }} paragraph>
                  {translated.from} {_flt[active].lowestPrice}PLN/h
                </Typography>
              </div>
              <div>
                <Icon className={classes.arrows} onClick={handlePrev}>
                  keyboard_arrow_left
                </Icon>
                <Icon className={classes.arrows} onClick={handleNext}>
                  keyboard_arrow_right
                </Icon>
              </div>
            </Hidden>
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" onClick={openSpecs}>
              {translated.spec}
            </Button>
            <Button onClick={openRent} variant="contained">
              {translated.rent}
            </Button>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Dialog open={specsOpen} onClose={closeSpecs}>
        <DialogTitle>Specyfikacja</DialogTitle>
        <DialogContent>
          <Typography paragraph>
            Et fugiat esse eu fugiat eiusmod aute fugiat nulla velit velit.
            Aliqua in ad velit eu laboris nulla. Duis nostrud aute nulla irure
            officia nisi minim cillum commodo reprehenderit voluptate. Cupidatat
            cillum aute magna incididunt ex nulla. Veniam laborum mollit est
            nostrud eiusmod.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSpecs}>Zamknij</Button>
        </DialogActions>
      </Dialog>
      <Payment open={rentOpen} handleClose={closeRent} />
    </React.Fragment>
  );
};

const VehicleItem = ({ vehicle, active, className, classNameHidden }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  if (!active || !vehicle) return null;

  return (
    <img
      src={vehicle.image}
      onLoad={handleLoad}
      className={loading ? classNameHidden : className}
      style={{
        transform: vehicle.flip ? 'scaleX(-1)' : 'initial',
      }}
      alt="vehicle"
    />
  );
};

export default withStyles(styles)(FleetSelector);
