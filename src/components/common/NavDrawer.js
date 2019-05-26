import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  withStyles,
  Icon,
} from '@material-ui/core'
import DraftsIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/Inbox'

const styles = theme => ({
  paper: {
    backgroundColor: '#212121',
    width: '100%',
    color: '#fff',
    maxWidth: 280,
  },
})

const NavDrawer = ({ toggled, closeDrawer, classes }) => {
  return (
    <Drawer
      anchor="left"
      open={toggled}
      onClose={closeDrawer}
      classes={{ paper: classes.paper }}>
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
