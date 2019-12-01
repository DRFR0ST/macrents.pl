import React, { useState } from 'react'
import {
  withStyles,
  Icon,
  Button,
  Typography,
  DialogActions,
  DialogTitle,
  DialogContent,
  Dialog,
  Hidden,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useLittera } from 'react-littera'

import fleet from '../../api/fleet.js'

const styles = {
  root: {
    width: '100vw',
    overflow: 'hidden',
    maxWidth: '100%',
    minHeight: 'calc(100vh - 64px)',
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    background:
      'linear-gradient(to top, rgba(255, 255, 255, 0.6), transparent 55%)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '80vw',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    margin: '0 auto',
  },
  '@keyframes vanish': {
    '0%': { opacity: 0, top: '250px' },
    '60%': { opacity: 0 },
    '100%': { opacity: 1, top: '0px' },
  },
  controlsText: {
    '& h1': {
      minWidth: '50%',
    },
  },
  vehicleBox: {
    height: '100%',
    maxHeight: '400px',
    position: 'relative',
    minHeight: '400px',
    width: 'auto',
  },
  vehicle: {
    height: '400px',
    position: 'relative',
    width: 'auto',
    animationName: '$vanish',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '455ms',
    animationDirection: 'alternate',
    maxHeight: '400px',
  },
  vehicleHidden: {
    height: '400px',
    position: 'relative',
    width: 'auto',
    minWidth: '80vw',
    opacity: 0,
  },
  arrows: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: '30px',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 40,
    padding: 10,
    top: '45%',
    opacity: 0.8,
    transition: 'all 450ms ease',

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      opacity: 1,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem',
    '& button': {
      margin: '0 10px',
    },
  },
  '@media (max-width: 768px)': {
    vehicle: {
      width: '100%',
      height: 'auto',
      maxHeight: 'initial',
    },
    container: {
      //height: '250px',
      width: '100vw',
    },
    controls: {
      flexDirection: 'column',
      '& h1': {
        minWidth: 'initial',
        flexBasis: '100%',
        order: 1,
      },
    },
    arrows: {
      order: 2,
      flex: '1 1',
    },
  },
}

const translations = {
  from: {
    de_DE: 'von',
    pl_PL: 'od',
    en_US: 'from',
  },
  spec: {
    pl_PL: 'Specyfikacja',
    en_US: 'Specification',
    de_DE: 'Spezifikation',
  },
  rent: {
    pl_PL: 'Wypożycz',
    de_DE: 'Miete',
    en_US: 'Rent',
  },
}

const FleetSelector = ({ classes }) => {
  const history = useHistory()
  const [active, setActive] = useState(0)
  const [specsOpen, setSpecsOpen] = useState(false)
  const [translated] = useLittera(translations)

  const handleNext = () =>
    setActive(fleet.length - 1 === active ? 0 : active + 1)
  const handlePrev = () =>
    setActive(0 === active ? fleet.length - 1 : active - 1)

  const closeSpecs = () => setSpecsOpen(false)
  const openSpecs = () => history.push('/vehicle/' + active)

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <div className={classes.container}>
            {fleet.map((e, i) => (
              <VehicleItem
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
                <h1>{fleet[active].name}</h1>
                <Typography style={{ opacity: 0.6 }} paragraph>
                  {translated.from} {fleet[active].lowestPrice} PLN/h
                </Typography>
              </div>
              <Icon className={classes.arrows} onClick={handleNext}>
                keyboard_arrow_right
              </Icon>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.controlsText}>
                <h1>{fleet[active].name}</h1>
                <Typography style={{ opacity: 0.6 }} paragraph>
                  {translated.from} {fleet[active].lowestPrice}PLN/h
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
            <Button variant="contained">{translated.rent}</Button>
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
    </React.Fragment>
  )
}

const VehicleItem = ({ vehicle, active, className, classNameHidden }) => {
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }

  if (!active || !vehicle) return null

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
  )
}

export default withStyles(styles)(FleetSelector)
