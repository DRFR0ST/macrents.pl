import React, { useState, useRef, useEffect } from 'react'
import { withStyles, Icon } from '@material-ui/core'

import ExampleVehicle from 'images/fleet/exampleVehicle.jpg'
import ExampleVehicle2 from 'images/fleet/exampleVehicle3.png'
import ExampleVehicle3 from 'images/fleet/exampleVehicle4.png'
import ExampleVehicle4 from 'images/fleet/exampleVehicle5.png'
import ExampleVehicle5 from 'images/fleet/exampleVehicle6.jpg'
import ExampleVehicle6 from 'images/fleet/exampleVehicle7.jpg'

const styles = {
  root: {
    width: '100vw',
    overflow: 'hidden',
    maxWidth: '100%',
    height: 'calc(100vh - 64px)',
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    '& h1': {
      minWidth: '50%',
    },
  },
  '@keyframes vanish': {
    '0%': { opacity: 0, top: '250px' },
    '60%': { opacity: 0 },
    '100%': { opacity: 1, top: '0px' },
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
  '@media (max-width: 667px)': {
    vehicle: {
      width: '100%',
      height: 'auto',
      maxHeight: 'initial',
    },
    container: {
      //height: '250px',
    },
    controls: {
      '& h1': {
        minWidth: 'initial',
      },
    },
  },
}

const fleet = [
  {
    name: 'BMW 4 Series Coupe',
    image: ExampleVehicle,
    flip: false,
  },
  {
    name: 'BMW M4 Coupe & Convertible',
    image: ExampleVehicle5,
    flip: false,
  },
  {
    name: 'BMW 4 Series Convertible',
    image: ExampleVehicle6,
    flip: false,
  },
  {
    name: 'Skoda Fabia',
    image: ExampleVehicle2,
    flip: false,
  },
  {
    name: 'Land Rover Discovery Sport 2.0',
    image: ExampleVehicle3,
    flip: false,
  },
  {
    name: 'Mazda 6',
    image: ExampleVehicle4,
    flip: true,
  },
]

const FleetSelector = ({ classes }) => {
  const [active, setActive] = useState(0)

  const handleNext = () =>
    setActive(fleet.length - 1 === active ? 0 : active + 1)
  const handlePrev = () =>
    setActive(0 === active ? fleet.length - 1 : active - 1)

  return (
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
          <Icon className={classes.arrows} onClick={handlePrev}>
            keyboard_arrow_left
          </Icon>
          <h1>{fleet[active].name}</h1>
          <Icon className={classes.arrows} onClick={handleNext}>
            keyboard_arrow_right
          </Icon>
        </div>
      </div>
    </div>
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
