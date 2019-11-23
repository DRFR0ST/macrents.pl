import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { useLittera } from 'react-littera'

const styles = theme => ({
  root: {
    height: '64px',
    width: '100%',
    position: 'relative',
    color: '#fff',
  },
  container: {
    height: '100%',
    padding: '0 5vw',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    '& p': {
      margin: 0,
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    '& p': {
      padding: '0 5px',
      textDecoration: 'underline',
      cursor: 'pointer',
      opacity: 0.8,
      transition: 'opacity 255ms ease',
      '&:hover': {
        opacity: 1,
      },
    },
  },
  '@media (max-width: 767px)': {
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
  },
})

const translations = {
  privacyPolicy: {
    en_US: 'Privacy policy',
    pl_PL: 'Polityka prywatności',
  },
}

const Footer = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography paragraph>Copyright (c) 2019, VMRents.pl</Typography>
        <div className={classes.links}>
          <Typography paragraph>{translated.privacyPolicy}</Typography>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
