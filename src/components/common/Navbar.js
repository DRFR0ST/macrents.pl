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
}

const Navbar = ({ children, classes, history, drawerOpen, setDrawerOpen }) => {
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

  const languageLabel =
    language === 'en_US' ? enFlag : language === 'pl_PL' ? plFlag : plFlag

  const handleToggle = () => setLangMenuOpen(!langMenuOpen)
  const handleClose = () => setLangMenuOpen(false)

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Hidden mdUp>
          <div className={classes.leftSmall}>
            <IconButton
              color="primary"
              onClick={() => setDrawerOpen(!drawerOpen)}>
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
                setActiveTab(i)
                history.push(`/${e.key === 'home' ? '' : e.key}`)
              }

              return (
                <Button
                  color="primary"
                  variant={activeTab === i ? 'outlined' : 'text'}
                  onClick={handleClick}>
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
                onClick={handleToggle}>
                {languageLabel}
              </IconButton>
              <Popper
                open={langMenuOpen}
                anchorEl={langRef.current}
                transition
                disablePortal
                style={{ zIndex: 50 }}>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}>
                    <Paper id="menu-list-grow" className={classes.blackPaper}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              handleClose()
                              setLanguage('pl_PL')
                            }}>
                            {plFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Polski
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose()
                              setLanguage('en_US')
                            }}>
                            {enFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              English
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
