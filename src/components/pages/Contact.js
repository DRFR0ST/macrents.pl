import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useLittera } from 'react-littera'
import { Typography } from '@material-ui/core'
import ContactForm from '../common/Contact'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
  },
  content: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    color: '#FFF',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  header: {
    width: '100%',
    height: '50vh',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.7,
    },
  },
  shadow: {
    width: '100%',
    height: '100%',
    background: `linear-gradient(to top, ${theme.palette.background.main} 5%, transparent)`,
    top: 0,
    left: 0,
    position: 'absolute',
  },
}))

const translations = {
  title: {
    de_DE: 'Kontakt',
    pl_PL: 'Kontakt',
    en_US: 'Contact',
  },
}

const Contact = () => {
  const classes = useStyles()
  const [translated] = useLittera(translations)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={`https://source.unsplash.com/7nrsVjvALnA/`} alt="Traffic" />
        <div className={classes.shadow} />
      </div>
      <div className={classes.content}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
