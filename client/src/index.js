import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import About from './routes/About';
import Crew from './routes/Crew';
import Calendar from './routes/Calendar';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
