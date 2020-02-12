import React, { useState } from 'react';

import LitteraProvider from 'react-littera';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavDrawer from '../components/common/NavDrawer';
import Navbar from 'components/common/Navbar';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import LoadingPage from '../components/pages/Loader.js';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
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
  palette: {
    background: {
      darker: '#1a1a1a',
      lighter: '#424242',
      main: '#212121',
    },
    primary: {
      darker: '#7e6542',
      lighter: '#d5b97f',
      main: '#a48453',
    },
    type: 'dark',
  },
  typography: {
    color: '#fff',
    fontFamily: "'Titillium Web', sans-serif",
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState('pl_PL');

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={theme}>
        <LitteraProvider language={language} setLanguage={setLanguage}>
          <LoadingPage />
          <Router>
            <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
            <Routes />
            <NavDrawer
              toggled={drawerOpen}
              closeDrawer={() => setDrawerOpen(false)}
            />
          </Router>
        </LitteraProvider>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
