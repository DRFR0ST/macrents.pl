import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
  Hidden,
  Icon,
} from '@material-ui/core'
import { useLittera } from 'react-littera'
import { withRouter } from 'react-router-dom'

import polishFlag from 'images/flags/PL.png'
import englishFlag from 'images/flags/US.png'
import germanFlag from 'images/flags/DE.png'

import logo from 'images/logo.png'

const styles = theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    height: '64px',
    background: theme.palette.background.main,
    position: 'relative',
    display: 'inline-block',
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    maxHeight: '64px',
    padding: '0.5rem 10%',
  },
  logo: {
    maxHeight: 'calc(64px - 1rem)',
    width: 'auto',
  },
  logoSmall: {
    maxHeight: 'calc(64px - 1rem)',
    maxWidth: '60%',
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  right: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  blackPaper: {
    background: '#212121',
    border: `0.5px solid ${theme.palette.primary.main}`,
    color: '#FFF',
    boxShadow: `0px 4px 22px -8px rgba(182, 156, 117, 0.4)`,
  },
  leftSmall: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '10%',
  },
  rightSmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
})

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
}

const Navbar = ({
  children,
  classes,
  history,
  location,
  drawerOpen,
  setDrawerOpen,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [translated, language, setLanguage] = useLittera(translations)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langRef = useRef(null)
  const plFlag = (
    <img
      src={polishFlag}
      alt="Polish Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  )
  const enFlag = (
    <img
      src={englishFlag}
      alt="English Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  )
  const deFlag = (
    <img
      src={germanFlag}
      alt="German Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  )

  React.useEffect(() => {
    if (location.pathname.indexOf(tabs[activeTab].key) <= -1) {
      const newActive = tabs.find(
        e =>
          (e.key === 'home' && location.pathname === '/') ||
          location.pathname.replace('/', '') === e.key
      )
      const newIndex = tabs.indexOf(newActive)
      newIndex > -1 && setActiveTab(newIndex)
    }
  }, [location.pathname]) // eslint-disable-line

  const flags = {
    pl_PL: plFlag,
    de_DE: deFlag,
    en_US: enFlag,
  }

  const languageLabel = flags[language] || enFlag

  const handleToggle = () => setLangMenuOpen(!langMenuOpen)
  const handleClose = () => setLangMenuOpen(false)

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
                history.push(`/${e.key === 'home' ? '' : e.key}`)
              }

              return (
                <Button
                  color="primary"
                  variant={activeTab === i ? 'outlined' : 'text'}
                  onClick={handleClick}
                >
                  {translated[e.key]}
                </Button>
              )
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
                              handleClose()
                              setLanguage('pl_PL')
                            }}
                          >
                            {plFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Polski
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose()
                              setLanguage('en_US')
                            }}
                          >
                            {enFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              English
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose()
                              setLanguage('de_DE')
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
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
}

export default withStyles(styles)(withRouter(Navbar))
