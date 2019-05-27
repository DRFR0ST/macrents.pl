import React, { useState } from 'react'
import { TextField, Icon, Button, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

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
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
  paper: {
    padding: '10%',
    background: theme.palette.background.main,
  },
})

const ContactPanel = ({ classes }) => {
  const [values, setValues] = useState(['', '', ''])

  const handleChange = (id, value) => {
    let vals = [...values]
    vals[id] = value
    setValues(vals)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          fullWidth
          color="primary"
          placeholder="Name"
          value={values[0]}
          onChange={e => handleChange(0, e.target.value)}
          variant="outlined"
          inputProps={{ className: classes.input }}
          className={classes.textField}
          classes={{ input: classes.input }}
        />
        <TextField
          fullWidth
          color="primary"
          placeholder="E-mail"
          type="email"
          value={values[1]}
          onChange={e => handleChange(1, e.target.value)}
          variant="outlined"
          inputProps={{ className: classes.input }}
          className={classes.textField}
          classes={{ input: classes.input }}
        />
        <TextField
          fullWidth
          color="primary"
          placeholder="Message"
          multiline
          value={values[2]}
          onChange={e => handleChange(2, e.target.value)}
          variant="outlined"
          inputProps={{ className: classes.input }}
          className={classes.textField}
          classes={{ input: classes.input }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ float: 'right', marginTop: '1rem' }}>
          <Icon>send</Icon>
          Wyślij
        </Button>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(ContactPanel)
