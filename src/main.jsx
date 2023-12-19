import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/space-grotesk"; // Defaults to weight 400
import "@fontsource/space-grotesk/400.css"; // Specify weight

import './index.css'

import { ScopedCssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

//////Lo que hace es crear un tema para poder usarlo
const theme = createTheme({
  typography:{
    fontFamily: "Space Grotesk"
  },
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(278, 68%, 11%)',
      light: 'hsl(279, 6%, 55%)',
      dark: 'hsl(278, 68%, 11%)',
      contrastText: 'hsl(270, 3%, 87%)',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: 'hsl(0, 100%, 66%)',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ScopedCssBaseline /> 
    <App/>
    </ThemeProvider>
  </React.StrictMode>,
)