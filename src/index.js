import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// in order to use routing logic within our app, we have to import the WEB App Router into our project
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    {/* in order to enable React Router to control and manage all of the URLS within this SPA, we have to wrap Rouyter around our application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
