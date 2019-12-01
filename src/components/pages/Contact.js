import ContactForm from '../common/Contact';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    color: '#FFF',
    height: '100%',
    left: '50%',
    margin: '0 auto',
    position: 'absolute',
    top: '80%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  header: {
    '& img': {
      height: 'auto',
      left: '50%',
      opacity: 0.7,
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
    },
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  root: {
    position: 'relative',
    width: '100%',
  },
  shadow: {
    background: `linear-gradient(to top, ${theme.palette.background.main} 5%, transparent)`,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          src={`https://source.unsplash.com/7nrsVjvALnA/${
            window.innerWidth
          }x${window.innerHeight / 2}`}
          alt="Traffic"
        />
        <div className={classes.shadow} />
      </div>
      <div className={classes.content}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
