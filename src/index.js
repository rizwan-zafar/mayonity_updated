import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/header/ScrollTop";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BackEndUrlContext } from './BackEndUrlContext';
const BackEndUrl="https://www.admin.mayonity.com";
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ScrollTop />
      <BackEndUrlContext.Provider  value={BackEndUrl}>
      <App />
      </BackEndUrlContext.Provider >
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();