import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Icon,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

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
})

const tabs = [
  {
    key: 'home',
    icon: 'home',
  },
  {
    key: 'fleet',
    icon: 'style',
  },
  {
    key: 'about',
    icon: 'business',
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
  },
  about: {
    en_US: 'About',
    pl_PL: 'O nas',
  },
  pricing: {
    en_US: 'Pricing',
    pl_PL: 'Cennik',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
  },
  fleet: {
    en_US: 'Fleet',
    pl_PL: 'Flota',
  },
}

const NavDrawer = ({ toggled, closeDrawer, classes, history }) => {
  const [translated] = useLittera(translations)

  return (
    <Drawer
      anchor="left"
      open={toggled}
      onClose={closeDrawer}
      classes={{ paper: classes.paper }}>
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
              }}>
              <ListItemIcon>
                <Icon style={{ color: '#fff' }}>{tab.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={translated[tab.key]} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(withRouter(NavDrawer))
