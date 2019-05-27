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

import logo from 'images/logo.png'

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

const NavDrawer = ({ toggled, closeDrawer, classes }) => {
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
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>
              <Icon style={{ color: '#fff' }}>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>
              <Icon style={{ color: '#fff' }}>business</Icon>
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>
              <Icon style={{ color: '#fff' }}>attach_money</Icon>
            </ListItemIcon>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button onClick={closeDrawer}>
            <ListItemIcon>
              <Icon style={{ color: '#fff' }}>phone</Icon>
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(NavDrawer)
