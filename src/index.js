// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core';
// Layouts
import Core from './Core';
// Assets
import './assets/css/Global.css';
import './assets/css/Scrollbar.css';
const pageTheme = createTheme({
  palette: {
    background: {
        default: '#e9ebee'
    },
    primary: {
      light: '#e9ebee',
      main: '#2196f3',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffb347',
      dark: '#f2f5fa'
    },
    error: {
      main: '#DA4B1B',
    },
    warning: {
      main: '#DA4B1B',
    },
    info: {
      light: '#0a2d33',
      main: '#15616D',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"Poppins"',
    //   '"Segoe UI"',
    //   'sans-serif'
    ].join(','),
  },
});

ReactDOM.render(
  <ThemeProvider theme= { pageTheme }>
    <CssBaseline />
      <Core />
    </ThemeProvider>,
  document.getElementById('root')
);