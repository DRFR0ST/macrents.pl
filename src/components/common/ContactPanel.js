import React, { useState } from 'react'
import { TextField, Icon, Button, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { useLittera } from 'react-littera'

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10% 0',
    '& input': {
      width: '100%',
    },
    overflow: 'hidden',
  },
  input: {
    color: '#fff !important',
    borderColor: '#fff !important',
  },
  textField: {
    color: '#fff !important',
    borderColor: '#fff !important',
    margin: '1rem 0',
    '& input': {
      borderColor: '#fff !important',
    },
  },
  plusChunk: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    width: '44%',
    height: '22.5%',
    position: 'absolute',
    bottom: '10%',
    right: '7%',
    zIndex: 1,
  },
  plusChunk2: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    width: '35.5%',
    height: '19%',
    position: 'absolute',
    top: '12.5%',
    left: '9%',
    zIndex: 1,
  },
  paper: {
    margin: '0 5%',
    padding: '6%',
    background: 'rgba(21, 21, 21, 0.8)',
    zIndex: 2,
    borderRadius: '25px',
  },
  backgroundImage: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '100%',
    zIndex: -1,
  },
  backgroundImageGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'radial-gradient(transparent 20%, rgba(0, 0, 0, 0.6) 60%)',
    zIndex: 0,
  },
  notchedOutline: {
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  focused: {
    '& $notchedOutline': {
      borderColor: 'yellow',
    },
  },
})

const translations = {
  name: {
    en_US: 'Name',
    pl_PL: 'Imię i Nazwisko',
  },
  email: {
    en_US: 'Email Address',
    pl_PL: 'Adres E-Mail',
  },
  message: {
    en_US: 'Message',
    pl_PL: 'Wiadomość',
  },
  submit: {
    en_US: 'Submit',
    pl_PL: 'Wyślij',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
  },
}

const ContactPanel = ({ classes }) => {
  const [values, setValues] = useState(['', '', ''])
  const [translated] = useLittera(translations)

  const handleChange = (id, value) => {
    let vals = [...values]
    vals[id] = value
    setValues(vals)
  }

  return (
    <div className={classes.root}>
      <div className={classes.backgroundImageGradient} />
      <img
        src="http://source.unsplash.com/a5XN1f09_ek"
        className={classes.backgroundImage}
        alt="background"
      />
      <div className={classes.plusChunk} />
      <div className={classes.plusChunk2} />
      <Paper className={classes.paper}>
        <Typography variant="h3" style={{ color: '#a48453', opacity: 0.8 }}>
          {translated.contact}
        </Typography>
        <TextField
          fullWidth
          color="primary"
          placeholder={translated.name}
          value={values[0]}
          onChange={e => handleChange(0, e.target.value)}
          variant="filled"
          inputProps={{ className: classes.input }}
          className={classes.textField}
        />
        <TextField
          fullWidth
          color="primary"
          placeholder={translated.email}
          type="email"
          value={values[1]}
          onChange={e => handleChange(1, e.target.value)}
          variant="filled"
          inputProps={{ className: classes.input }}
          className={classes.textField}
        />
        <TextField
          fullWidth
          color="primary"
          placeholder={translated.message}
          multiline
          value={values[2]}
          onChange={e => handleChange(2, e.target.value)}
          variant="filled"
          inputProps={{ className: classes.input }}
          className={classes.textField}
        />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          style={{ float: 'right', marginTop: '1rem' }}>
          <Icon>send</Icon>
          {translated.submit}
        </Button>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(ContactPanel)
