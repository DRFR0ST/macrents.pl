import React, { useState } from 'react'
import LitteraProvider from 'react-littera'
import Navbar from 'components/common/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { createMuiTheme } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import NavDrawer from '../components/common/NavDrawer'

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#d5b97f',
      darker: '#7e6542',
      main: '#a48453',
    },
    background: {
      main: '#212121',
      lighter: '#424242',
    },
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    color: '#fff',
  },
  button: {
    color: '#fff',
  },
  input: {
    borderColor: 'rgba(255, 255, 255, 0.3) !important',
    notchedOutline: {
      borderColor: 'rgba(255, 255, 255, 0.3) !important',
    },
  },
  notchedOutline: {
    borderColor: 'rgba(255, 255, 255, 0.3) !important',
  },
})

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [language, setLanguage] = useState('pl_PL')

  const basename =
    process.env.REACT_APP_MODE === 'dev' ? '/' : '/vmrents-website/'

  return (
    <MuiThemeProvider theme={theme}>
      <LitteraProvider language={language} setLanguage={setLanguage}>
        <Router basename={basename}>
          <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <Routes />
          <NavDrawer
            toggled={drawerOpen}
            closeDrawer={() => setDrawerOpen(false)}
          />
        </Router>
      </LitteraProvider>
    </MuiThemeProvider>
  )
}

export default App
