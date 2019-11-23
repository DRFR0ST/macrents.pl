import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import fleet from '../../api/fleet'
import { makeStyles } from '@material-ui/styles'
import { useLittera } from 'react-littera'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    color: theme.typography.color,
  },
  imageContainer: {
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    height: '400px',
    '& img': {
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100vw',
      height: 'auto',
    },
  },
  thumbnailEl: {
    /* The image used */
    'background-image': 'url("img_girl.jpg")',

    /* Full height */
    height: '100%',

    /* Center and scale the image nicely */
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
  },
  specsContainer: {
    maxWidth: '200px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
    padding: '5px',
  },
  specsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    margin: 0,
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    '&:last-child': {
      borderBottom: 'none',
    },
    '& p': {
      margin: 0,
      '&:last-child': {
        opacity: 0.75,
      },
    },
  },
  contentContainer: {
    position: 'relative',
    top: '-185px',
    padding: '5% 10%',
    zIndex: 99,
    '@media (max-width: 768px)': {
      padding: '3%',
    },
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
  },
  description: {
    opacity: 0.7,
  },
  available: {
    padding: '8px 12px',
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: '12px',
  },
  headerShadow: {
    zIndex: 3,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: `linear-gradient(to top, ${theme.palette.background.main} 5%, transparent)`,
  },
}))

const translations = {
  yes: {
    en_US: 'Yes',
    pl_PL: 'Tak',
  },
  no: {
    en_US: 'No',
    pl_PL: 'Nie',
  },
  turbo: {
    en_US: 'Turbo',
    pl_PL: 'Turbo',
  },
  speed: {
    pl_PL: 'Prędkość',
    en_US: 'Speed',
  },
  handling: {
    pl_PL: 'Prowadzenie',
    en_US: 'Handling',
  },
}

function CarPreview() {
  const { id } = useParams()
  const vehicle = useRef(fleet[id])
  const classes = useStyles()
  const [translated, language] = useLittera(translations)

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.headerShadow} />
        {/* <img src={vehicle.current.thumbnail} alt={vehicle.current.name} /> */}
        <div
          className={classes.thumbnailEl}
          style={{ 'background-image': `url(${vehicle.current.thumbnail})` }}
        ></div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper}>
          <h1 className={classes.title}>{vehicle.current.name}</h1>
          <p className={classes.available}>
            {vehicle.current.available ? 'Dostepny' : 'Niedostepny'}
          </p>
        </div>
        {typeof vehicle.current.description[language] === 'string' ? (
          <p className={classes.description}>
            {vehicle.current.description[language]}
          </p>
        ) : (
          vehicle.current.description[language].map(e => (
            <p className={classes.description}>{e}</p>
          ))
        )}
        <br />
        <br />
        <div className={classes.specsContainer}>
          {Object.keys(vehicle.current.specs).map(e => {
            const k = translated[e]
            const v =
              typeof vehicle.current.specs[e] === 'boolean'
                ? translated[vehicle.current.specs[e]]
                  ? translated['yes']
                  : translated['no']
                : vehicle.current.specs[e]

            return (
              <div className={classes.specsItem}>
                <p>{k}</p>
                <p>{v}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CarPreview
