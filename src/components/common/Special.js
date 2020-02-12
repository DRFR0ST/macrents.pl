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
      description:
        'Consectetur laborum et commodo occaecat est eu commodo et mollit amet nulla qui magna. Aute irure aute deserunt do in magna quis amet cupidatat culpa deserunt est. Ullamco occaecat dolor aliqua ea eiusmod est exercitation. Excepteur pariatur commodo ullamco voluptate dolor. Commodo nisi officia pariatur adipisicing aute qui aute. Consequat sunt consequat magna eu proident ut labore consectetur veniam officia ex tempor ex quis. Ullamco dolore dolore nulla est qui sint esse do et magna ea ea dolor laborum. Exercitation quis non ea duis. Cillum qui ipsum elit do tempor sit irure sint reprehenderit culpa deserunt mollit. Eiusmod nisi nulla esse sunt dolor quis nostrud non deserunt. Proident ad incididunt exercitation excepteur magna dolore id dolor elit Lorem minim. Occaecat aliqua aliquip veniam ipsum veniam laboris cillum nostrud minim exercitation ad ullamco. Deserunt commodo aute exercitation esse sint. In veniam cupidatat nostrud mollit nulla magna anim enim consequat culpa. Qui qui labore aliqua cupidatat velit fugiat cillum magna ipsum. Irure adipisicing elit qui consectetur occaecat culpa.',
      image:
        'https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      title: translated.slogan1,
    },
    {
      description:
        'Consectetur laborum et commodo occaecat est eu commodo et mollit amet nulla qui magna. Aute irure aute deserunt do in magna quis amet cupidatat culpa deserunt est. Ullamco occaecat dolor aliqua ea eiusmod est exercitation. Excepteur pariatur commodo ullamco voluptate dolor. Commodo nisi officia pariatur adipisicing aute qui aute. Consequat sunt consequat magna eu proident ut labore consectetur veniam officia ex tempor ex quis. Ullamco dolore dolore nulla est qui sint esse do et magna ea ea dolor laborum. Exercitation quis non ea duis. Cillum qui ipsum elit do tempor sit irure sint reprehenderit culpa deserunt mollit. Eiusmod nisi nulla esse sunt dolor quis nostrud non deserunt. Proident ad incididunt exercitation excepteur magna dolore id dolor elit Lorem minim. Occaecat aliqua aliquip veniam ipsum veniam laboris cillum nostrud minim exercitation ad ullamco. Deserunt commodo aute exercitation esse sint. In veniam cupidatat nostrud mollit nulla magna anim enim consequat culpa. Qui qui labore aliqua cupidatat velit fugiat cillum magna ipsum. Irure adipisicing elit qui consectetur occaecat culpa.',
      image: 'https://source.unsplash.com/ZhEnFcHO0es',
      title: translated.slogan2,
    },
    {
      description:
        'Consectetur laborum et commodo occaecat est eu commodo et mollit amet nulla qui magna. Aute irure aute deserunt do in magna quis amet cupidatat culpa deserunt est. Ullamco occaecat dolor aliqua ea eiusmod est exercitation. Excepteur pariatur commodo ullamco voluptate dolor. Commodo nisi officia pariatur adipisicing aute qui aute. Consequat sunt consequat magna eu proident ut labore consectetur veniam officia ex tempor ex quis. Ullamco dolore dolore nulla est qui sint esse do et magna ea ea dolor laborum. Exercitation quis non ea duis. Cillum qui ipsum elit do tempor sit irure sint reprehenderit culpa deserunt mollit. Eiusmod nisi nulla esse sunt dolor quis nostrud non deserunt. Proident ad incididunt exercitation excepteur magna dolore id dolor elit Lorem minim. Occaecat aliqua aliquip veniam ipsum veniam laboris cillum nostrud minim exercitation ad ullamco. Deserunt commodo aute exercitation esse sint. In veniam cupidatat nostrud mollit nulla magna anim enim consequat culpa. Qui qui labore aliqua cupidatat velit fugiat cillum magna ipsum. Irure adipisicing elit qui consectetur occaecat culpa.',
      image: 'https://source.unsplash.com/cTmL8HxP8NQ/',
      title: translated.slogan3,
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
