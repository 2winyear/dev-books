import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Timer from './Timer'
import './index.css';
import CountDown from './CountDown';

ReactDOM.render(
  <React.StrictMode>
    <Clock/>
    <Timer />
    <CountDown />
  </React.StrictMode>,
  document.getElementById('root')
);