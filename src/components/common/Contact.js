import { Button, Icon, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import translations from 'translations/contact.trans.js';
import { useLittera } from 'react-littera';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
  card: {
    '@media (max-width: 768px)': {
      alignItems: 'center',
      flexDirection: 'column',
      width: '95%',
    },
    borderRadius: 14,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '1200px',
    position: 'relative',
    width: '90%',
  },
  contactContainer: {
    '& h1': {
      fontSize: '38px',
    },
    color: '#fff',
    opacity: 1,
    position: 'relative',
    zIndex: 90,
  },
  flexItem: {
    '& .material-icons': {
      width: '10%',
    },
    '& p': {
      borderBottom: `5px solid ${theme.palette.primary.main}`,
      opacity: 0.85,
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  left: {
    '@media (max-width: 768px)': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      width: '90%',
    },
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
    color: theme.typography.color,
    overflow: 'hidden',
    padding: '5%',
    position: 'relative',
    width: '50%',
  },
  map: {
    '@media (max-width: 768px)': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  mapOverlay: {
    background: 'rgba(21, 21, 21, 0.85)',
    height: '100.1%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100.1%',
    zIndex: 2,
  },
  right: {
    '@media (max-width: 768px)': {
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14,
      borderTopRightRadius: 0,
      width: '90%',
    },
    background: theme.palette.background.darker,
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    padding: '3% 5%',
    width: '50%',
  },
  root: {
    height: 'auto',
    padding: '5% 0',
    position: 'relative',
    width: '100%',
  },
  textField: {
    color: '#fff !important',
    margin: '0.8rem 0',
  },
}));

function Contact() {
  const classes = useStyles();
  const [values, setValues] = useState(['', '', '', '']);
  const [translated] = useLittera(translations);

  const handleChange = (id, value) => {
    let vals = [...values];
    vals[id] = value;
    setValues(vals);
  };

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.left}>
          <div className={classes.mapOverlay} />
          <iframe
            className={classes.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.446387886426!2d16.896681115802938!3d52.39858557979134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d3a0cdecc9%3A0x4494a6f6ec067c76!2sStanis%C5%82awa%20Wyspia%C5%84skiego%2012%2C%2060-750%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1574470145873!5m2!1sen!2spl"
            frameBorder={0}
            allowFullScreen={true}
            title="loc_map"
          ></iframe>
          <div className={classes.contactContainer}>
            <h1>{translated.contact}</h1>
            <div className={classes.flexItem}>
              <Icon>phone</Icon> <p>+48 600 779 749</p>
            </div>
            <div className={classes.flexItem}>
              <Icon>mail</Icon> <p>info@macrents.pl</p>
            </div>
            <div className={classes.flexItem}>
              <Icon>map</Icon>
              <p>
                Stanisława Wyspiańskiego 12/18
                <br />
                60-750 Poznań
              </p>
            </div>

            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
            >
              <SocialIcon
                style={{ marginRight: 12 }}
                bgColor="#a48453"
                fgColor="#fff"
                url="https://www.facebook.com/macrents.car/"
              />
              <SocialIcon
                bgColor="#a48453"
                fgColor="#fff"
                url="https://www.instagram.com/macrents.car/"
              />
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <TextField
            fullWidth
            color="primary"
            placeholder={translated.name}
            value={values[0]}
            onChange={(e) => handleChange(0, e.target.value)}
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.textField}
          />
          <TextField
            fullWidth
            color="primary"
            placeholder={translated.email}
            type="email"
            value={values[1]}
            onChange={(e) => handleChange(1, e.target.value)}
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.textField}
          />
          <TextField
            fullWidth
            color="primary"
            placeholder={translated.phone}
            type="phone"
            value={values[2]}
            onChange={(e) => handleChange(2, e.target.value)}
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.textField}
          />
          <TextField
            fullWidth
            color="primary"
            placeholder={translated.message}
            multiline
            value={values[3]}
            onChange={(e) => handleChange(3, e.target.value)}
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.textField}
          />
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ float: 'right', marginTop: '1rem' }}
          >
            <Icon style={{ marginRight: 8, fontSize: 16 }}>send</Icon>{' '}
            {translated.submit}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
