import {
  Button,
  ClickAwayListener,
  Grow,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import englishFlag from 'images/flags/US.png';
import germanFlag from 'images/flags/DE.png';
import logo from 'images/logo.png';
import polishFlag from 'images/flags/PL.png';
import translations from 'translations/nav.trans.js';
import { useLittera } from 'react-littera';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  blackPaper: {
    background: '#212121',
    border: `0.5px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 4px 22px -8px rgba(182, 156, 117, 0.4)`,
    color: '#FFF',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    maxHeight: '64px',
    padding: '0.5rem 10%',
    position: 'relative',
  },
  left: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
  },
  leftSmall: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '10%',
  },
  logo: {
    maxHeight: 'calc(64px - 1rem)',
    width: 'auto',
  },
  logoSmall: {
    maxHeight: 'calc(64px - 1rem)',
    maxWidth: '60%',
  },
  right: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
  },
  rightSmall: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
  },
  root: {
    background: theme.palette.background.main,
    display: 'inline-block',
    height: '64px',
    maxWidth: '100%',
    position: 'relative',
    width: '100vw',
  },
});

const tabs = [
  {
    key: 'home',
  },
  {
    key: 'about',
  },
  {
    key: 'fleet',
  },
  {
    key: 'pricing',
  },
  {
    key: 'contact',
  },
];

const Navbar = ({
  children,
  classes,
  history,
  location,
  drawerOpen,
  setDrawerOpen,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [translated, language, setLanguage] = useLittera(translations);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef(null);
  const plFlag = (
    <img
      src={polishFlag}
      alt="Polish Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );
  const enFlag = (
    <img
      src={englishFlag}
      alt="English Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );
  const deFlag = (
    <img
      src={germanFlag}
      alt="German Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );

  React.useEffect(() => {
    if (location.pathname.indexOf(tabs[activeTab].key) <= -1) {
      const newActive = tabs.find((e) => {
        return (
          (e.key === 'home' && location.pathname === '/') ||
          location.pathname.replace('/', '') === e.key
        );
      });
      const newIndex = tabs.indexOf(newActive);
      newIndex > -1 && setActiveTab(newIndex);
    }
  }, [location.pathname]); // eslint-disable-line

  const flags = {
    de_DE: deFlag,
    en_US: enFlag,
    pl_PL: plFlag,
  };

  const languageLabel = flags[language] || enFlag;

  const handleToggle = () => setLangMenuOpen(!langMenuOpen);
  const handleClose = () => setLangMenuOpen(false);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Hidden mdUp>
          <div className={classes.leftSmall}>
            <IconButton
              color="primary"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <Icon>menu</Icon>
            </IconButton>
          </div>
          <div className={classes.rightSmall}>
            <img className={classes.logoSmall} src={logo} alt="Logo" />
          </div>
        </Hidden>
        <Hidden smDown>
          <div className={classes.left}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div className={classes.right}>
            {tabs.map((e, i) => {
              const handleClick = () => {
                history.push(`/${e.key === 'home' ? '' : e.key}`);
              };

              return (
                <Button
                  color="primary"
                  variant={activeTab === i ? 'outlined' : 'text'}
                  onClick={handleClick}
                >
                  {translated[e.key]}
                </Button>
              );
            })}
            <div>
              <IconButton
                ref={langRef}
                aria-owns={langMenuOpen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="primary"
                onClick={handleToggle}
              >
                {languageLabel}
              </IconButton>
              <Popper
                open={langMenuOpen}
                anchorEl={langRef.current}
                transition
                disablePortal
                style={{ zIndex: 50 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper id="menu-list-grow" className={classes.blackPaper}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('pl_PL');
                            }}
                          >
                            {plFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Polski
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('en_US');
                            }}
                          >
                            {enFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              English
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('de_DE');
                            }}
                          >
                            {deFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Deutsch
                            </Typography>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </Hidden>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default withStyles(styles)(withRouter(Navbar));
