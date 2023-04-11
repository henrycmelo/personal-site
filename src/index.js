import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './hooks/ScrollToTop';
import { ColorModeScript } from '@chakra-ui/react'
import theme from "./style/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
