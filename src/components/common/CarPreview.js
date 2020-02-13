import React, { useRef } from 'react';

import Loader from './Loader';
import fleet from '../../api/fleet';
import { makeStyles } from '@material-ui/styles';
import translations from 'translations/fleet.trans.js';
import { useLittera } from 'react-littera';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  available: {
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: '12px',
    padding: '8px 12px',
  },
  brandedColor: {
    color: theme.palette.primary.lighter,
  },
  contentContainer: {
    '@media (max-width: 768px)': {
      padding: '3%',
    },
    padding: '5% 10%',
    position: 'relative',
    top: '-185px',
    zIndex: 99,
  },
  contentWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    opacity: 0.7,
  },
  headerShadow: {
    background: `linear-gradient(to top, ${theme.palette.background.main} 5%, transparent)`,
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 3,
  },
  imageContainer: {
    '& img': {
      height: 'auto',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100vw',
    },
    height: '400px',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  root: {
    color: theme.typography.color,
    position: 'relative',
    width: '100%',
  },
  specsContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
    maxWidth: '300px',
    padding: '5px',
  },
  specsItem: {
    '& p': {
      '&:first-child': {
        color: theme.palette.primary.lighter,
      },
      '&:last-child': {
        opacity: 0.75,
      },
      margin: 0,
    },
    '&:last-child': {
      borderBottom: 'none',
    },
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary.darker}`,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: '1rem',
  },
  thumbnailEl: {
    /* The image used */
    'background-image': 'url("img_girl.jpg")',

    /* Center and scale the image nicely */
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',

    /* Full height */
    height: '100%',
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 0,
  },
}));

function CarPreview() {
  const { id } = useParams();
  const vehicle = useRef(fleet[id]);
  const classes = useStyles();
  const [translated, language] = useLittera(translations);

  if (!vehicle.current) return <Loader />;

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.headerShadow} />
        {/* <img src={vehicle.current.thumbnail} alt={vehicle.current.name} /> */}
        <div
          className={classes.thumbnailEl}
          style={{
            'background-image': `url(${vehicle.current.thumbnail})`,
            ...vehicle.current.thumbnailStyle,
          }}
        ></div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper}>
          <div>
            <h1 className={classes.title}>{vehicle.current.name}</h1>
            <p style={{ marginTop: 0, opacity: 0.75 }}>
              {vehicle.current.type}
            </p>
          </div>
        </div>
        <h3 className={classes.brandedColor}>Wyposażenie</h3>
        {typeof vehicle.current.description[language] === 'string' ? (
          <p className={classes.description}>
            {vehicle.current.description[language]}
          </p>
        ) : (
          vehicle.current.description[language] &&
          vehicle.current.description[language].map((e) => (
            <p className={classes.description}>{e}</p>
          ))
        )}
        <br />
        <br />
        <div className={classes.specsContainer}>
          {Object.keys(vehicle.current.specs).map((e) => {
            const k = translated[e];
            const v =
              typeof vehicle.current.specs[e] === 'boolean'
                ? translated[vehicle.current.specs[e]]
                  ? translated['yes']
                  : translated['no']
                : vehicle.current.specs[e];

            return (
              <div className={classes.specsItem}>
                <p>{k}</p>
                <p>{v}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarPreview;
