import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
} from '@material-ui/core';

import React, { useState } from 'react';
import translations from 'translations/special.trans.js';
import { useLittera } from 'react-littera';

import special2Image from 'images/volkswagen-passat-alltrack-b8-2016-06.png';
import special1Image from 'images/special_background01.jpg';

const styles = (theme) => ({
  imageLeft: {
    height: 'auto',
    minWidth: '100%',
    position: 'absolute',
    right: 0,
    top: '85%',
    transform: 'translateY(-85%)',
    zIndex: -1,
  },
  imageRight: {
    height: 'auto',
    left: 0,
    minWidth: '100%',
    position: 'absolute',
    top: '75%',
    transform: 'translateY(-75%)',
    zIndex: -1,
  },
  imageRight2: {
    height: 'auto',
    left: 0,
    minWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: -1,
  },
  rootLeft: {
    alignItems: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'flex-end',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
    borderTop: '1px solid #121212',
    borderBottom: '1px solid #121212',
  },
  rootRight: {
    alignItems: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'flex-start',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
    borderTop: '1px solid #121212',
    borderBottom: '1px solid #121212',
  },
  shadowLeft: {
    background: 'linear-gradient(to bottom left, #121212d9 35%, transparent)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  shadowRight: {
    background: 'linear-gradient(to bottom right, #121212d9 35%, transparent)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  sloganLeft: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    opacity: 0.8,
    padding: '0 10%',
    textAlign: 'left',
    width: '50%',
    zIndex: 1,
  },
  sloganRight: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    opacity: 0.8,
    padding: '0 10%',
    textAlign: 'left',
    width: '50%',
    zIndex: 1,
  },
});

const Special = ({ classes }) => {
  const [translated] = useLittera(translations);
  const [dialog, setDialog] = useState(null);

  const specials = [
    {
      description: translated.content1,
      image: special1Image,
      title: translated.slogan1,
      altImageStyle: {
        maxWidth: '100%',
      },
    },
    {
      description: translated.content2,
      image: special2Image,
      title: translated.slogan2,
      altImageStyle: {
        marginTop: 60,
      },
    },
    {
      description: translated.content3,
      image:
        'https://img2.goodfon.com/wallpaper/nbig/2/ad/mercedes-znachok-buket.jpg',
      title: translated.slogan3,
      altImageStyle: {
        maxWidth: '100%',
      },
    },
  ];

  const handleDialogOpen = (spec = null) => () => {
    setDialog(spec);
  };

  const handleDialogClose = () => {
    setDialog(null);
  };

  return (
    <div>
      {specials.map((spec, i) => {
        const isRight = i % 2 === 0;
        const side = isRight ? 'Right' : 'Left';

        const cls = {
          image: classes[`image${side}`],
          root: classes[`root${side}`],
          shadow: classes[`shadow${side}`],
          slogan: classes[`slogan${side}`],
        };

        const img = (
          <React.Fragment>
            <div className={cls.shadow} />
            <img
              style={spec.altImageStyle}
              src={spec.image}
              className={cls.image}
              alt={`${spec.title} background`}
            />
          </React.Fragment>
        );

        return (
          <div className={cls.root} key={JSON.stringify(spec)}>
            {!isRight && img}
            <div className={cls.slogan}>
              <div>
                <h2>{spec.title}</h2>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleDialogOpen(spec)}
                >
                  {translated.learnMore}
                </Button>
              </div>
            </div>
            {isRight && img}
          </div>
        );
      })}

      <SpecialDialog spec={dialog} handleClose={handleDialogClose} />
    </div>
  );
};

const SpecialDialog = ({ spec = null, handleClose }) => {
  if (spec === null) return null;

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{spec.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {spec.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(Special);
