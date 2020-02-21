import {
  Collapse,
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import React, { useState } from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import englishFlag from 'images/flags/US.png';
import germanFlag from 'images/flags/DE.png';
import logo from 'images/logo.svg';
import polishFlag from 'images/flags/PL.png';
import translations from 'translations/nav.trans.js';
import { useLittera } from 'react-littera';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  logo: {
    '& img': {
      maxHeight: '46px',
    },
    alignItems: 'center',
    display: 'flex',
    height: '64px',
    justifyContent: 'center',
    margin: '1rem 0',
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    backgroundColor: '#212121',
    color: '#fff',
    maxWidth: 280,
    position: 'relative',
    width: '100%',
  },
});

const tabs = [
  {
    icon: 'home',
    key: 'home',
  },
  {
    icon: 'business',
    key: 'about',
  },
  {
    icon: 'style',
    key: 'fleet',
  },
  {
    icon: 'attach_money',
    key: 'pricing',
  },
  {
    icon: 'description',
    key: 'documents',
  },
  {
    icon: 'phone',
    key: 'contact',
  },
];

const NavDrawer = ({ toggled, closeDrawer, classes, history }) => {
  const [translated, , setLanguage] = useLittera(translations);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((v) => !v);

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
          {tabs.map((tab) => (
            <ListItem
              key={JSON.stringify(tab)}
              button
              onClick={() => {
                closeDrawer();
                history.push(tab.key !== 'home' ? `/${tab.key}` : '/');
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
  );
};

export default withStyles(styles)(withRouter(NavDrawer));
