import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Icon,
  Divider,
  Collapse,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import polishFlag from 'images/flags/PL.png'
import englishFlag from 'images/flags/US.png'
import germanFlag from 'images/flags/DE.png'
import logo from 'images/logo.png'

import { useLittera } from 'react-littera'

const styles = theme => ({
  paper: {
    backgroundColor: '#212121',
    width: '100%',
    color: '#fff',
    maxWidth: 280,
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
    '& img': {
      maxHeight: '46px',
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
})

const tabs = [
  {
    key: 'home',
    icon: 'home',
  },
  {
    key: 'about',
    icon: 'business',
  },
  {
    key: 'fleet',
    icon: 'style',
  },
  {
    key: 'pricing',
    icon: 'attach_money',
  },
  {
    key: 'contact',
    icon: 'phone',
  },
]

const translations = {
  home: {
    en_US: 'Home',
    pl_PL: 'Strona główna',
    de_DE: 'Home',
  },
  about: {
    en_US: 'About',
    pl_PL: 'O nas',
    de_DE: 'Über uns',
  },
  pricing: {
    en_US: 'Pricing',
    pl_PL: 'Cennik',
    de_DE: 'Preisliste',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
    de_DE: 'Kontakt',
  },
  fleet: {
    en_US: 'Fleet',
    pl_PL: 'Flota',
    de_DE: 'Flotte',
  },
  language: {
    en_US: 'Language',
    pl_PL: 'Język',
    de_DE: 'Sprache',
  },
}

const NavDrawer = ({ toggled, closeDrawer, classes, history }) => {
  const [translated, , setLanguage] = useLittera(translations)
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(v => !v)

  return (
    <Drawer
      anchor="left"
      open={toggled}
      onClose={closeDrawer}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.root}>
        <List>
          {tabs.map(tab => (
            <ListItem
              button
              onClick={() => {
                closeDrawer()
                history.push(tab.key !== 'home' ? `/${tab.key}` : '/')
              }}
            >
              <ListItemIcon>
                <Icon style={{ color: '#fff' }}>{tab.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={translated[tab.key]} />
            </ListItem>
          ))}
          <Divider />
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={translated.language} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => setLanguage('pl_PL')}
              >
                <ListItemIcon>
                  <img
                    src={polishFlag}
                    style={{ height: '24px' }}
                    alt="Polish flag"
                  />
                </ListItemIcon>
                <ListItemText primary="Polski" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => setLanguage('en_US')}
              >
                <ListItemIcon>
                  <img
                    src={englishFlag}
                    style={{ height: '24px' }}
                    alt="English flag"
                  />
                </ListItemIcon>
                <ListItemText primary="English" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => setLanguage('de_DE')}
              >
                <ListItemIcon>
                  <img
                    src={germanFlag}
                    style={{ height: '24px' }}
                    alt="German flag"
                  />
                </ListItemIcon>
                <ListItemText primary="Deutsch" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(withRouter(NavDrawer))
