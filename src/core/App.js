import React, {useState} from 'react';
import LitteraProvider from "react-littera";
import Navbar from 'components/common/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: "#d5b97f",
      darker: "#7e6542",
      main: "#a48453"
    }
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    color: "#fff",
  },
  button: {
    color: "#fff"
  }
});

function App() {
  const [language, setLanguage] = useState("pl_PL");

  return (
    <MuiThemeProvider theme={theme}>
    <LitteraProvider language={language} setLanguage={setLanguage}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </LitteraProvider>
    </MuiThemeProvider>
  );
}

export default App;
